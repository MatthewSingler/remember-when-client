import React, { useEffect, useState } from "react"
import { getYears } from "./YearManager"
import { useHistory } from "react-router"
import { getCategories } from "../FactCategories/FactCategoryManager"
import { getFacts, getFactsByYear } from "../Facts/FactManager"

export const YearList = () => {
    const [years, setYears] = useState([])
    const [currentYear, setCurrentYear] = useState([])
    const [categories, setCategory] = useState([])
    const [selectedCategory, currentCategory] = useState([])
    const [facts, setFacts] = useState([])
    const [displayedFacts, showFacts] = useState([])
    const history = useHistory()

    const yearFetcher = () => {
        getYears().then(data => setYears(data))
    }
    const fetchFacts = () => {
        getFacts().then(data => setFacts(data))
    }
    const fetchCategories = () => {
        getCategories().then(data => setCategory(data))
    }

    useEffect(() => {
        getFactsByYear(currentYear.year).then(data => setFacts(data))
    }, [currentYear])

    useEffect(() => {
        let matchedFacts = [] /*Variable to hold the facts that get returned from a category*/
        if (selectedCategory != []) {  /*If the selected category is not an empty array, then loop through the facts and then loop through the category on the facts. If the fact category is the same as the selected category, then we push those facts into the matched facts array and finally update state with setFacts calling matchedFacts.*/
            for (const fact of facts) {
                for (const category of fact.category) {
                    if (category.id == selectedCategory.category) {
                        matchedFacts.push(fact)
                    }
                }
            }
            showFacts(matchedFacts)
        }
    }, [selectedCategory, currentYear])

        useEffect(() => {
            yearFetcher()
            fetchCategories()
            fetchFacts()
        }, [])
    const chooseYear = (domEvent) => {
            const yearCopy = { ...currentYear }
            yearCopy[domEvent.target.name] = domEvent.target.value
        setCurrentYear(yearCopy)
        currentCategory({category: 0})
        }
        const chooseCategory = (domEvent) => {
            const categoryCopy = { ...selectedCategory }
            categoryCopy[domEvent.target.name] = domEvent.target.value
            currentCategory(categoryCopy)
        }
        // const relevantFacts = (domEvent) => {
        //     const factCopy = { ...displayedFacts}
        //     factCopy[domEvent.target.name] = domEvent.target.value
        //     showFacts(factCopy)
        // }

        return (
            <article className="years">
                <>
                    <select name="year" className="form-control"
                        value={currentYear.yearId}
                        onChange={chooseYear}>
                        <option value="0">Select a Year</option>
                        {
                            years.map(year => <option value={year.id}>{year.year_number}{ }</option>)
                        }
                    
                    </select>
                    <select name="category" className="form-control"
                        value={selectedCategory.category}
                        onChange={chooseCategory}>
                        <option value="0">Select Category</option>
                        {
                            categories.map(category => <option value={category.id}>{category.type}</option>)
                        }
                    </select>
                    {selectedCategory.category ?
                        
                        displayedFacts.map(fact => {
                            return (
                                <>
                                    <div className="fact__contents">{fact.contents}</div>
                                    <button className="comment" onClick={() => history.push(`/comments/new/${fact.id}`)}>Comment</button>
                                    <button className="comment" onClick={() => history.push(`/comments/${fact.id}`)}>View Comments</button>
                                
                                </>
                                
                            )
                        }) : ""
                    }
                    
                </>
            </article>
        )
}