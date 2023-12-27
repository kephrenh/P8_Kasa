import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="nav">
            <NavLink to={"/"}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                <img className="nav__logo" src="logo-nav.svg" alt="Kasa Logo" />
            </NavLink>
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
        </nav>
    )
}
