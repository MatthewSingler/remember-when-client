export const getFacts = () => {
    return fetch("http://localhost:8000/facts", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}

export const getFactsByYear = (year) => {
    return fetch(`http://localhost:8000/facts?year=${year}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}

export const createFact = (fact) => {
    return fetch("http://localhost:8000/facts", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(fact)
    })
}

export const saveFact = (fact) => {
    return fetch("http://localhost:8000/facts", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fact)
    })

}
export const deleteFact = (factId) => {
    return fetch(`http://localhost:8000/facts/${factId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            'Content-Type': 'application/json'
        }
    })
}
