import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-Link" to="/years">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-Link" to="/facts">Facts</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-Link" to="/facts/new">Add Fact</Link>
            </li>
            {/* <li className="navbar__item">
                <Link className="nav-Link" to="/years">Years</Link>
            </li> */}
            {/* <li className="navbar__item">
                <Link className="nav-Link" to="/categories">Categories</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-Link" to="/comments">Comments</Link>
            </li> */}
            {
                (localStorage.getItem("rw_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("rw_token")
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