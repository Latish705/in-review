'use client'
import React, { useState } from 'react';
import { userLogin } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    
    const router = useRouter();

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserInfo((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLogin = async (userInfo) => {
        try {
            const response = await userLogin(userInfo);
                alert('logged in');
                router.push('/home')
        } catch (error) {
            throw new Error(error);
        }

    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <div className="max-w-md mx-auto">
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={userInfo.username}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userInfo.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-footer text-white px-4 py-2 rounded hover:bg-teal-900"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
