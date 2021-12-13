import React, { useEffect, useState } from "react"
import { getCategories } from "./FactCategoryManager"

export const FactCategoryList = () => {
    const [categories, setCategory] = useState([])
    const fetchCategories = () => {
        getCategories().then(data => setCategory(data))
    }
    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <>
            <article className="categories">
                {
                    categories.map(category => {
                        return <section key={`category--${category.id}`} className="category">
                            <h3></h3>
                            <div className="fact__category">{category.type}</div>
                        </section>
                    })
                }
            </article>
        </>
    )
}