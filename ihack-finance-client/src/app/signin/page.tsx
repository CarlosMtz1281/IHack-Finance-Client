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
                if (typeof window !== 'undefined') {
                    // Perform localStorage action
                    localStorage.setItem('id_miembro', data.id_miembro);
                localStorage.setItem('nombre', data.nombre);
                  }

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
        <div className="contAll">
            <div className="imageCont2">
                <div>
                    <Image
                        src="/logo.png"
                        width={50}
                        height={50}
                        alt="rueda"
                    />
                </div>
            </div>
            <div className=" w-64 flex flex-col justify-center align-center mb-32 h-screen ml-16">
                <div className="">
                    <p className="loginText">
                        Login
                    </p>
                    <p className="descText">
                        Ingresa tus datos para continuar
                    </p>

                </div>

                <div className="inputGroup">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <path d="M20 8v6M23 11h-6"></path>
                    </svg>
                    <input type="text" placeholder="Username" className="inputField" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input type="password" placeholder="Password" className="inputField" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/*
                <div className="inputContainer">
                    <i className="icon">👤</i>
                    <input
                        type="text"
                        placeholder="Email"
                        className="inputs"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="inputs"
                />
                */}

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

                <div className="flex justify-center -mb-80 py-44">
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
