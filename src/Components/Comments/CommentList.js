import React, { useEffect, useState } from "react"
import { deleteComment, getComments, getCommentsByFact } from "./CommentManager"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"

export const CommentList = () => {
    const [comments, setComments] = useState([])
    const history = useHistory()
    const { factId } = useParams()
    const {commentId} = useParams()
    
    const commentFetch = () => {
        getCommentsByFact(factId).then(data => setComments(data))
    }
    useEffect(() => {
        getCommentsByFact(factId).then(data => setComments(data))
    }, [])


    return (
        <article className="comments">
            <>
                {
                    comments.map(comment => {
                        return <section key={`comment--${comment.id}`} className="comment">
                            <div className="comment__fact"><h4>Fact</h4>{comment?.fact.contents}</div>
                            <br></br>
                            <div className="comment__contents">{comment?.contents}
                            </div>
                            <button className="delete" onClick={() => deleteComment(comment.id).then(() => commentFetch(), history.push('/facts'))}>Delete Comment</button>
                            <button className="return" onClick={() => history.push('/facts')}>Return</button>
                        </section>
                    })
                }
            </>
        </article>
    )
}