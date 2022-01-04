export const getComments = () => {
    return fetch("https://remember-when-c50.herokuapp.com/comments", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}

export const getCommentsByYear = (year) => {
    return fetch(`https://remember-when-c50.herokuapp.com/comments?year=${year}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}
export const getCommentsByCategory = (category) => {
    return fetch(`https://remember-when-c50.herokuapp.com/comments?category=${category}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}
export const getCommentsByFact = (factId) => {
    return fetch(`https://remember-when-c50.herokuapp.com/comments?facts=${factId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}

export const createComment = (comment) => {
    return fetch("https://remember-when-c50.herokuapp.com/comments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
}

export const saveComment = (comment) => {
    return fetch("https://remember-when-c50.herokuapp.com/comments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
}
export const deleteComment = (commentId) => {
    return fetch(`https://remember-when-c50.herokuapp.com/comments/${commentId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            'Content-Type': 'application/json'
        }
    })
}