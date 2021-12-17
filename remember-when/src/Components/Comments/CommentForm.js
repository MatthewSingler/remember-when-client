import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getComments, createComment, saveComment, getCommentsByCategory, getCommentsByFact, getCommentsByYear } from "./CommentManager"
import { getYears } from "../Years/YearManager"
import { getCategories } from "../FactCategories/FactCategoryManager"
import { getFacts } from "../Facts/FactManager"


export const CommentForm = () => {
    const { factId } = useParams()
    const [newComment, setNewComment] = useState({fact: factId})
    const [currentYear, setCurrentYear] = useState([])
    const [years, setYears] = useState([])
    const [categories, setCategory] = useState([])
    const [selectedCategory, currentCategory] = useState([])
    const [selectedFact, setFact] = useState([])
    const history = useHistory()
    

    const yearFetcher = () => {
        getYears().then(data => setYears(data))
    }
    const fetchCategories = () => {
        getCategories().then(data => setCategory(data))
    }
    const fetchFacts = () => {
        getFacts().then(data => setFact(data))
    }
    useEffect(() => {
        yearFetcher()
        fetchCategories()
        fetchFacts()
    }, [])

    const handleOnChange = (event) => {
        const copyNewComment = { ...newComment}
        copyNewComment[event.target.name] = event.target.value
        setNewComment(copyNewComment)
    }

    const saveComment = (evt) => {
        evt.preventDefault()
        createComment(newComment).then(() => {
            history.push('/comments')
        })
    }
    
    return (
        <form>

            <div>
                <label>Contents</label>
                <input type="text" name="contents" value={newComment.contents} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <button
                    onClick={evt => {
                        evt.preventDefault()
                        saveComment(evt)
                            history.push('/years')
                    }} className="create">Submit Comment
                </button>
            </div>
        </form>
    )
}