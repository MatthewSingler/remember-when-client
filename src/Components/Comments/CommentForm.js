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

    const handleOnChange = (event) => {  //the handleOnChange sets the comment with a value, which is a new id for the comment.//
        const copyNewComment = { ...newComment}
        copyNewComment[event.target.name] = event.target.value
        setNewComment(copyNewComment)
    }

    const saveComment = (evt) => {
        evt.preventDefault()
        createComment(newComment).then(() => {
            history.push(`/comments/${factId}`)
        })
    }
    
    return (
        <form>

            <div>
                <label>Comment</label>
                <input type="text" name="contents" value={newComment.contents} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <button
                    onClick={evt => {
                        evt.preventDefault()
                        saveComment(evt)
                    }} className="create">Submit Comment
                </button>
            </div>
        </form>
    )
}