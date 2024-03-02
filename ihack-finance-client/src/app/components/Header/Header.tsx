'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import {BurgerNav} from '../BurgerNav/BurgerNav'


const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                Logo
            </div>
            <BurgerNav sections={2}/>
        </div>
    )
}

export default Header
