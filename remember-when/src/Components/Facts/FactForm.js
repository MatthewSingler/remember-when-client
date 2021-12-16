import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getFacts, createFact, saveFact } from "./FactManager"
import { getYears } from "../Years/YearManager"
import { getCategories } from "../FactCategories/FactCategoryManager"


export const FactForm = () => {
    const [newFact, setNewFact] = useState({}) /*The initial empty state to hold my newFact.*/
    const [currentYear, setCurrentYear] = useState([])
    const [years, setYears] = useState([])
    const [categories, setCategory] = useState([])
    const [selectedCategory, currentCategory] = useState([])
    const history = useHistory()
    const {factId} = useParams()
    const yearFetcher = () => {
        getYears().then(data => setYears(data))
    }
    const fetchCategories = () => {
        getCategories().then(data => setCategory(data))
    }
    useEffect(() => {
        yearFetcher()
        fetchCategories()
    }, [])

    const handleOnChange = (event) => {
        const copyNewFact = { ...newFact }
        copyNewFact[event.target.name] = event.target.value
        setNewFact(copyNewFact)
    }

    const saveFact = (evt) => {
        evt.preventDefault()
        createFact(newFact).then(() => {
            history.push('/facts')
        })
    }

    // const chooseYear = (domEvent) => {
    //     const yearCopy = { ...currentYear }
    //     yearCopy[domEvent.target.name] = domEvent.target.value
    //     setCurrentYear(yearCopy)
    // }
    // const chooseCategory = (domEvent) => {
    //     const categoryCopy = { ...selectedCategory }
    //     categoryCopy[domEvent.target.name] = domEvent.target.value
    //     currentCategory(categoryCopy)
    // }

    return (
        <form>
            <select name="year" className="form-control"
                value={currentYear.yearId}
                onChange={handleOnChange}>
                <option value="0">Select a Year</option>
                {
                    years.map(year => <option value={year.id}>{year.year_number}{ }</option>)
                }
                </select>
            <select name="category" className="form-control"
                value={selectedCategory.category}
                onChange={handleOnChange}>
                <option value="0">Select Category</option>
                {
                    categories.map(category => <option value={category.id}>{category.type}{ }</option>)
                }
            </select>

            <div>
                <label>Contents</label>
                <input type="text" name="contents" value={newFact.contents} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <button
                    onClick={evt => {
                        evt.preventDefault()
                        if (factId === undefined) {
                            saveFact(evt)
                        }
                        
                    }} className="create">Create Fact
                </button>
                {/* <button className="create" onClick={() => saveFact()}>Create</button> */}
            </div>
        </form>
    )
}