'use client'
import React, { useState } from 'react';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [college, setCollege] = useState('');
    const [cgpa, setCGPA] = useState('');
    const [branch, setBranch] = useState('');

    const handleSignup = (e) => {
        e.preventDefault()
        // signup logic to be added
        console.log('Signing up with:', { username, email, password, college, cgpa, branch });
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Signup</h1>
            <div className="max-w-md mx-auto">
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="college" className="block text-gray-700">College:</label>
                        <input
                            type="text"
                            id="college"
                            name="college"
                            value={college}
                            onChange={(e) => setCollege(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cgpa" className="block text-gray-700">CGPA:</label>
                        <input
                            type="text"
                            id="cgpa"
                            name="cgpa"
                            value={cgpa}
                            onChange={(e) => setCGPA(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="branch" className="block text-gray-700">Branch:</label>
                        <input
                            type="text"
                            id="branch"
                            name="branch"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleSignup}
                        className="bg-footer text-white px-4 py-2 rounded hover:bg-teal-900"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
