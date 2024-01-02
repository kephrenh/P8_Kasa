import React from "react";
import { NavLink } from "react-router-dom";

export function Header() {

    const NavbarLogo = () => {
        return (
            <NavLink to={"/"}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                <img className="nav__logo" src="src/assets/logo-nav.svg" alt="Kasa Logo" />
            </NavLink>
        )
    }

    const NavbarLinks = () => {
        return (
            <ul className="nav__list">
                <li className="nav__list__home">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/"}>
                        Accueil
                    </NavLink>
                </li>
                <li className="nav__list__about">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/about"}>A Propos
                    </NavLink>
                </li>
            </ul>
        )
    }

    return (
      <header>
         <nav className="navbar">
            <NavbarLogo />
            <NavbarLinks />
         </nav>
      </header>
    )
}
