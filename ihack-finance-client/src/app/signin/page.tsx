"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Oxygen } from "next/font/google";
import "../style/signin.css";

const oxygen = Oxygen({ weight: '400', subsets: ["latin"] });
import { useState } from "react";

const SignInPage: React.FC = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const url = "http://34.168.188.169:3000/checkUser";

    const handleSignIn = async () => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (data.valid === true) {
                ;
                console.log("Sign-in successful");
                console.log(data); // Print the parsed response
                //save id_miembro
                localStorage.setItem('id_miembro', data.id_miembro);
                localStorage.setItem('nombre', data.nombre);
                window.location.href = "../dashboard";
                // Redirect to dashboard
            } else {
                // Handle error
                console.error("Sign-in failed");
                alert("An error occurred");

            }
        } catch (error) {
            console.error("An error occurred", error);
        }
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
