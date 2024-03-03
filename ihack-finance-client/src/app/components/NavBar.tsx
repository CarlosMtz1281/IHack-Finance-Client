import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import "../style/components/NavBar.css";

function Navbar({ navType }) {
        const [active, setActive] = useState("nav__menu");
        const [icon, setIcon] = useState("nav__toggler");
        const navToggle = () => {
            if (active === "nav__menu") {
                setActive("nav__menu nav__active");
            } else setActive("nav__menu");

            // Icon Toggler
            if (icon === "nav__toggler") {
                setIcon("nav__toggler toggle");
            } else setIcon("nav__toggler");
        };
        return (
            <nav className="nav">
                <a href="#" className="nav__brand">
                    Audita
                </a>
                <ul className={active}>
                    {navType === 1 && (
                        <li className="nav__item">
                            <Link href="/dashboard" className="nav__link">
                                Inicio
                            </Link>
                        </li>
                    )}
                    {navType === 2 && (
                        <>
                            <li className="nav__item">
                                <Link href="/dashboard" className="nav__link">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link href="/dashboard/registerDataM" className="nav__link">
                                    Registra Transaciones
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link href="/dashboard/report" className="nav__link">
                                    Reporte Mensual
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link href="../" className="nav__link">
                                    Cerrar Session
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        );
}

export default Navbar;