import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/userSlice";
import styles from "./navbar.module.scss";

const Navbar = ({ setIsOpen, isOpen }) => {
    const dispatch = useDispatch();
    const { isAuth, id, email, token } = useAuth();

    const burgerBtnRef = React.useRef(null);

    const onActiveLink = ({ isActive }) => {
        return { color: isActive ? "#9F0012" : "inherit" }
    }

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.composedPath().includes(burgerBtnRef.current)) {
                setIsOpen(false);
            }
        }
        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        }
    }, [])

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarMenu}>
                <div ref={burgerBtnRef} className={styles.navbarButtonOpen} onClick={() => setIsOpen(!isOpen)}>
                    <span className={styles.navbarLine}></span>
                    <span className={styles.navbarLine}></span>
                    <span className={styles.navbarLine}></span>
                </div>
                {
                    isOpen &&
                    <ul className={styles.navbarLinks}>
                        <li className={styles.navbarLink}>
                            <NavLink end style={onActiveLink} to="/">
                                Strona główna
                            </NavLink>
                        </li>
                        <li className={styles.navbarLink}>
                            <NavLink end style={onActiveLink} to="/gallery">
                                galeria
                            </NavLink>
                        </li>
                        <li className={styles.navbarLink}>
                            <NavLink end style={onActiveLink} to="/contacts">
                                kontakt
                            </NavLink>
                        </li>
                    </ul>
                }

            </div>


            {
                isAuth ?
                    <div className={styles.navbarOrientations}>
                        <div className={styles.navbarUserEmail}>{email}</div>
                        <button onClick={() => dispatch(removeUser())} className={styles.navbarLoginBtn}>Wyloguj się</button>
                    </div>
                    :
                    <div className={styles.navbarOrientations}>
                        <Link to="/login" className={styles.navbarLoginBtn}>Zaloguj się</Link>
                        <Link to="/register" className={styles.navbarLoginBtn}>Zarejestruj się</Link>
                    </div>
            }


        </nav>
    )
}

export default Navbar;