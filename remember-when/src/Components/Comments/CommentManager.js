export const getComments = () => {
    return fetch("http://localhost:8000/comments", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}

export const getCommentsByYear = (year) => {
    return fetch(`http://localhost:8000/comments?year=${year}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}
export const getCommentsByCategory = (category) => {
    return fetch(`http://localhost:8000/comments?category=${category}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}
export const getCommentsByFact = (factId) => {
    return fetch(`http://localhost:8000/comments?facts=${factId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}

export const createComment = (comment) => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
}

export const saveComment = (comment) => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
}