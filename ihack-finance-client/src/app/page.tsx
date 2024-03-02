
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";
import styles from "./style/landingPage.module.css";

export default function Home() {
  return (

    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className={styles.background}>
          <div className={styles.imageCont2}>
            <div>
              <Image 
                src="/ruedaCHi.png"
                width={100}
                height={200}
                alt="rueda"
              />
            </div>
            <div className="text-white text-center text-5xl font-bold">
              Sabritones
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image 
              src="/backgroundLanding.png"
              width={844}
              height={200}
              alt="bg image" />
          </div>
        </div>
        
        <p className="text-3xl pt-5 pb-8 px-6 text-left">
          Tu auditorio financiero personal para tomar control de tu dinero.
        </p>
        <button className={styles.signButton}>
          <Link href={"/signin"}>
            ¡Comienza ahora!
          </Link>
        </button>
      </div>
    </div>
  );
}
