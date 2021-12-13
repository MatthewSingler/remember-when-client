import React, { useEffect, useState } from "react"
import { getYears } from "./YearManager"
import { useHistory } from "react-router"
import { getCategories } from "../FactCategories/FactCategoryManager"
import { getFacts } from "../Facts/FactManager"

export const YearList = () => {
    const [years, setYears] = useState([])
    const [currentYear, setCurrentYear] = useState([])
    const history = useHistory()

    // useEffect(() => {
    //     getYears().then(data => setYears(data))
    // }, [])
    const yearFetcher = () => {
        getYears()
            .then(data => setYears(data))
    }
    // const fetchFacts = () => {
    //     getFacts().then(data => setFacts(data))
    // }
    // const fetchCategories = () => {
    //     getCategories().then(data => setCategory(data))
    // }
    useEffect(() => {
        yearFetcher()
        // fetchCategories()
    }, [])
    const chooseYear = (domEvent) => {
        const yearCopy = { ...currentYear }
        yearCopy[domEvent.target.name] = domEvent.target.value
        setCurrentYear(yearCopy)
    }

    return (
        <article className="years">
            <>
                <select name="year" className="form-control"
                    value={currentYear.yearId}
                    onChange={chooseYear}>
                    <option value="0">Select a Year</option>
                    {
                        years.map(year => <option value={year.id}>{year.year_number}{year.fact_category}</option>)
                    }
                </select>
            
            </>
        </article>
    )
}