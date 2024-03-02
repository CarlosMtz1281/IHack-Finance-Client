
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
        
        <p className="text-xl pt-5 pb-8 px-6 text-left">
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
