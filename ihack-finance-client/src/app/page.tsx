
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";
import styles from "./style/landingPage.module.css";

export default function Home() {
  return (

    <div>
      <Header number={1}/>
      <div className="flex flex-col justify-center items-center">
        <div className={styles.bloque}></div>
        <div className={styles.background}>
          <div className={styles.imageCont2}>
            <div>
              <Image 
                src="/logo.png"
                width={50}
                height={50}
                alt="rueda"
              />
            </div>
            <div className="text-white text-center text-6xl font-bold align-bottom">
              Audita
            </div>
          </div>
          <div className={styles.bloque2}></div>
          <div className={styles.imageContainer}>
            <button className={styles.signButton}>
              <Link href={"/signin"}>
                ¡Comienza ahora!
              </Link>
            </button>
            <Image 
              src="/backgroundLanding.png"
              width={844}
              height={200}
              alt="bg image" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image 
            src="/stonks2.svg"
            width={80}
            height={80}
            alt="stonks"
            style={{paddingTop: "5vh"}}
          />
          <div className="text-xl pt-7 font-bold">
            TU AUDITORIA PERSONAL
          </div>
          <div className=" text-base px-6 py-7 text-center">
          Optimiza tu gestión financiera con nuestra plataforma diseñada para empoderarte en el manejo de tus recursos económicos.
          </div>
        </div>

        
      </div>
    </div>
  );
}
