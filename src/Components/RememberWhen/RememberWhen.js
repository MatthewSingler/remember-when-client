import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "../ApplicationViews"
import { Navbar } from "../Nav/Navbar"
import { Login } from "../Auth/Login"
import { Register } from "../Auth/Register"

export const RememberWhen = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("rw_token")) {
                return <>
                    <Route>
                        <Navbar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)