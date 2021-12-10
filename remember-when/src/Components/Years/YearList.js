import React, { useEffect, useState } from "react"
import { getYears } from "./YearManager"
import { useHistory } from "react-router"

export const YearList = (props) => {
    const [years, setYears] = useState([])
    const history = useHistory()

    /*useEffect(() => {
        getYears().then(data => setYears(data))
    }, [])*/
    const yearFetcher = () => {
        getYears()
            .then(data => setYears(data))
    }

    useEffect(() => {
        yearFetcher()
    }, [])
}
return (
    <article className="years">
        {
            years.map(year => {
                return <section key={`year--${year.id}`} className="year">
                    <h3>Year</h3>
                    <div className="year__number">{year.year_number}</div>
                    <div className="year__facts">{year.facts}</div>
                </section>
            })
        }
    </article>
)