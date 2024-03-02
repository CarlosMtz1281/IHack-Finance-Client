"use client"

import React from "react";
import Image from "next/image";

const SignInPage: React.FC = () => {
    const handleSignIn = () => {
        // TODO: Implement sign-in logic
        window.location.href = "/dashboard";
    };

    const handleGoBack = () => {
        // TODO: Implement go-back logic
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-64">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />

                <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                />

                <button
                    onClick={handleSignIn}
                    className="w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-md"
                >
                    Sign In
                </button>

                <button
                    onClick={handleGoBack}
                    className="w-full px-4 py-2 text-blue-500 rounded-md"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default SignInPage;
