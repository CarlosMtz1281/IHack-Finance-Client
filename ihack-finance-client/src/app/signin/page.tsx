"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Oxygen } from "next/font/google";
import "../style/signin.css";
import "../style/constants.css";

const oxygen = Oxygen({ weight: '400', subsets: ["latin"] });

const SignInPage: React.FC = () => {
    const handleSignIn = () => {
        // TODO: Implement sign-in logic
        window.location.href = "/dashboard";
    };

    const handleGoBack = () => {
        // TODO: Implement go-back logic
        window.location.href = "/";
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-white">
            <div className="logo-font">
                <div className={oxygen.className}>
                    <p className="text-7xl text-white">Audita</p>
                </div>
            </div>
            <div className=" w-64 flex flex-col justify-between mb-32">
                <div className="">
                    <p className="text-left font-bold text-3xl py-2 text-white">
                        Login
                    </p>
                    <p className="text-sm text-white mb-5">
                        Ingresa tus datos para continuar
                    </p>

                </div>

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

                <div className="flex justify-end">
                    <button
                        onClick={handleSignIn}
                        className="sign-button"
                    >
                        <div className="flex flex-row">
                            <p className="px-5">Sign In</p>
                            <Image src="/right-arrow.png" width={20} height={20} alt="rightarrow"/>
                        </div>
                    </button>
                </div>

                <div className="flex justify-center -mb-96 py-44">
                    <button
                        onClick={handleGoBack}
                        className="w-full px-4 py-2 text-blue-500 rounded-md"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
