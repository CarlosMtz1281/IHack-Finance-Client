'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import {BurgerNav} from '../BurgerNav/BurgerNav'


const Header = ({number}: {number: number}) => {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                Audita
            </div>
            <div className={styles.burger}>
                <BurgerNav sections={number}/>

            </div>
        </div>
    )
}

export default Header
