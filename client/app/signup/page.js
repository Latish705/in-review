'use client'

import React, { useState } from 'react';
import { userSignup } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
    const router = useRouter();

    const [info, setInfo] = useState({
        username: '',
        email: '',
        password: '',
        college: {
            name: '',
            duration: {
                start: '',
                end: '',
            },
        },
        cgpa: '',
        branch: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInfo((prev) => {
            if (name === "college.name") {
                return {
                    ...prev,
                    college: {
                        ...prev.college,
                        name: value,
                    },
                };
            } else if (name === "college.duration.start") {
                return {
                    ...prev,
                    college: {
                        ...prev.college,
                        duration: {
                            ...prev.college.duration,
                            start: value
                        }
                    }
                }
            } else if (name === "college.duration.end") {
                return {
                    ...prev,
                    college: {
                        ...prev.college,
                        duration: {
                            ...prev.college.duration,
                            end: value
                        }
                    }
                }
            } else {
                return {
                    ...prev,
                    [name]: value,
                };
            }
        })  
    }

    const handleSignup = async (info) => {
        try {
            const response = await userSignup(info);
            console.log(info)
            if (response === true) {
                alert( "userSignupSuccesfull" );
                router.push('/home')
            }

        } catch (error) {
            alert('unalbe to signup, please recheck all the info filled');
            console.log(error);
        }
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
                            value={info.username}
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
                            value={info.email}
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
                            value={info.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="college" className="block text-gray-700">College:</label>
                        <input
                            type="text"
                            id="college"
                            name="college.name"
                            value={info.college.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="startYear" className="block text-gray-700">Start Year:</label>
                        <select
                            id="startYear"
                            name="college.duration.start"
                            value={info.college.duration.start}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select Year</option>
                            {/* Add the options for start years dynamically */}
                            {Array.from({ length: 10 }, (_, index) => (
                                <option key={index} value={2022 + index}>{2022 + index}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="endYear" className="block text-gray-700">End Year:</label>
                        <select
                            id="endYear"
                            name="college.duration.end"
                            value={info.college.duration.end}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select Year</option>
                            {/* Add the options for end years dynamically */}
                            {Array.from({ length: 10 }, (_, index) => (
                                <option key={index} value={2022 + index}>{2022 + index}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cgpa" className="block text-gray-700">CGPA:</label>
                        <input
                            type="text"
                            id="cgpa"
                            name="cgpa"
                            value={info.cgpa}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="branch" className="block text-gray-700">Branch:</label>
                        <input
                            type="text"
                            id="branch"
                            name="branch"
                            value={info.branch}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={()=>{handleSignup(info)}}
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
