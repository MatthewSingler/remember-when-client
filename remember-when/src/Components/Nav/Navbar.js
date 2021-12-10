import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-Link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-Link" to="/events">Years</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-Link" to="/games">Facts</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-Link" to="/profile">Categories</Link>
            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-Link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}