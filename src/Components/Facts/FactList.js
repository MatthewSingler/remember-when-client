import React, { useEffect, useState } from "react"
import { getFacts, createFacts, deleteFact } from "./FactManager"
import { useHistory } from "react-router"
import { getComments } from "../Comments/CommentManager"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import "./facts.css"

export const FactList = () => {
    const [facts, setFacts] = useState([])
    const [comments, setComments] = useState([])
    const history = useHistory()
    const { factId } = useParams
    
    const factFetch = () => {
        getFacts().then(data => setFacts(data))
    }

    const fetchComments = () => {
        getComments().then(data => setComments(data))
    }
    useEffect(() => {
        factFetch()
    }, [])

    return (
        <article className="facts">
        <>
            {
                facts.map(fact => {
                    return <section key={`fact--${fact.id}`} className="fact">
                        <span className="fact-block">
                        <h3 className="display">{fact.year.year_number}</h3>
                        <p className="fact__category">{fact?.category.type}</p>
                        <p className="fact-contents">{fact?.contents}</p>
                        </span>
                        <button className="comment" onClick={() => history.push(`/comments/new/${fact.id}`)}>Comment</button>
                        <button className="comment" onClick={() => history.push(`/comments/${fact.id}`)}>View Comments</button>
                        <button className="delete" onClick={() => deleteFact(fact.id).then(() => factFetch(),history.push('/years'))}>Delete Fact</button>
                    </section>
                })
                }
        </>
        </article>
)
}