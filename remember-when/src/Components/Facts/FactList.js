import React, { useEffect, useState } from "react"
import { getFacts, createFacts } from "./FactManager"
import { useHistory } from "react-router"

export const FactList = () => {
    const [facts, setFacts] = useState([])
    const history = useHistory()
    const factFetch = () => {
        getFacts().then(data => setFacts(data))
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