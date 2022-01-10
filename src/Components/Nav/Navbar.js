import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <button className="link">
                <Link className="nav-Link" to="/years">Home</Link>
                </button>
            </li>
            <li className="navbar__item">
                <button className="link">
                <Link className="nav-Link" to="/facts">Facts</Link>
                </button>
            </li>
            <li className="navbar__item">
                <button className="link">
                <Link className="nav-Link" to="/facts/new">Add Fact</Link>
                </button>
            </li>
            {
                (localStorage.getItem("rw_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("rw_token")
                                history.push({ pathname: "/login" })
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