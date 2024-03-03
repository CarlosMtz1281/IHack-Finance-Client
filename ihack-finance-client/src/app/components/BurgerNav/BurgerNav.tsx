
import React, {useState} from 'react'
import Link from 'next/link'
import styles from './BurgerNav.module.css'


export const BurgerNav = ({sections}: {sections: any}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    const handleLogOut = () => {
        localStorage.removeItem('id_miembro');
        window.location.href = "../";
    }

    return (
        <div>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                <ul>
                    {sections === 1 && (
                        <li>
                            <Link href='/signin'>
                                Sign In
                            </Link>
                        </li>
                    )}

                    {sections === 2 && (
                        <>
                            <li>
                                <Link href='/signin'>
                                    Registro
                                </Link>
                            </li>
                            <li>
                                <Link href='/signup'>
                                    Reporte
                                </Link>
                            </li>
                            <li>
                                <Link href='/dashboard'>
                                    Dashboard
                                </Link>
                            </li>
                            <li onClick={handleLogOut}>
                                Cerrar Sesion
                            </li>
                        </>
                    )}
                </ul>
            </nav>

            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

