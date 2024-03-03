"use client"

import React from "react";
import Image from "next/image";
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
