import React, { useEffect, useState } from "react"
import { getComments, getCommentsByFact } from "./CommentManager"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"

export const CommentList = () => {
    const [comments, setComments] = useState([])
    const history = useHistory()
    const { factId } = useParams()
    
    const commentFetch = () => {
        getComments().then(data => setComments(data))
    }
    useEffect(() => {
        // commentFetch()
        getCommentsByFact(factId).then(data => setComments(data))
    }, [])

    return (
        <article className="comments">
            <>
                {
                    comments.map(comment => {
                        return <section key={`comment--${comment.id}`} className="comment">
                            <h4>Comment About...</h4>
                            <div className="comment__fact">{comment?.fact.contents}</div>
                            <div className="comment__contents">{comment?.contents}
                            </div>
                        </section>
                    })
                }
            </>
        </article>
    )
}