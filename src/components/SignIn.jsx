import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

    const navigate = useNavigate();

    const handleSuccess = (credentialResponse) => {
            navigate('/google-login');
        };
    
        const handleError = () => {
            console.log('Login Failed');
        };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-neutral-700 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-white text-center">Sign In</h2>
                <button className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg flex items-center justify-center mb-4">
                    <GoogleLogin
                       onSuccess={handleSuccess}
                       onError={handleError}
                    />
                </button>
                <div className="flex items-center mb-4">
                    <hr className="flex-grow border-gray-600" />
                    <span className="text-gray-400 mx-2">OR, SIGN IN WITH YOUR EMAIL</span>
                    <hr className="flex-grow border-gray-600" />
                </div>
                <div className="mt-4 text-center">
                    <p className="text-gray-400">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}
