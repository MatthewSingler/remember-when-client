import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getFacts, createFact, saveFact } from "./FactManager"

export const FactForm = () => {
    const [newFact, setNewFact] = ({}) /*The initial empty state to hold my newFact.*/
    const history = useHistory()

    const handleOnChange = (event) => {
        const copyNewFact = { ...newFact }
        copyNewFact[event.target.name] = event.target.value
        setNewFact(copyNewFact)
    }

    useEffect(() => {
        if (factId) {
            getFacts(factId).then((data) => setNewFact({
                ...data,
                year: data.year_number,
                contents: data.contents,
                is_approved: data.is_approved,
                category: data.category
            }))
        }
    }, [factId])

    const saveFact = (event) => {
        event.preventDefault()

        createFact(fact).then(() => {
            history.push('/facts')
        })
    }

    return (
        <form>
            <div>
                <label>Year</label>
                <input name='year_number' type='number' value={newFact.year_number} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Contents</label>
                <input type="text" name="contents" value={newFact.contents} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Category</label>
                <input type="text" name="category" value={newFact.category} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <button onClick={(event) => {
                    if (factId) {
                        saveFact(event)
                    }
                }}>Create</button>
            </div>
        </form>
    )
}