import React, { useEffect, useState } from "react"
import { getFacts, createFacts, deleteFact } from "./FactManager"
import { useHistory } from "react-router"
import { getComments } from "../Comments/CommentManager"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

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
                        <h3>Fact</h3>
                        <div className="fact__category">{fact?.category.type}</div>
                        <div className="fact__contents">{fact?.contents}</div>
                        <button className="comment" onClick={() => history.push(`/comments/new/${fact.id}`)}>Comment</button>
                        <button className="comment" onClick={() => history.push(`/comments/${fact.id}`)}>View Comments</button>
                        <button className="delete" onClick={() => deleteFact(fact.id).then(() => factFetch(),history.push('/years'))}>Delete Fact</button>
                    </section>
                })
                }
                <br>
                </br>
                <button className="create" onClick={() => history.push('/facts/new')}>Add Fact</button>
        </>
        </article>
)
}