import React from "react"
import { Route } from "react-router-dom"
import { YearList } from "./Years/YearList"
import { FactList } from "./Facts/FactList"
import { FactCategoryList } from "./FactCategories/FactCategoryList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/years">
                <YearList />
            </Route>
            <Route exact path="/categories">
                <FactCategoryList />
            </Route>
            <Route exact path="/facts">
                <FactList />
            </Route>
            {/* <Route exact path="/fact/new">
                <FactForm />
            </Route>
            <Route exact path="/fact/edit/:factId">
                <FactForm />
            </Route>
            <Route exact path="/comment/new">
                <CommentForm />
            </Route>
            <Route exact path="/comment/edit/:commentId">
                <CommentForm />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route> */}
        </main>
    </>
}