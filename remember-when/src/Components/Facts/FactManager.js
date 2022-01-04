export const getFacts = () => {
    return fetch("https://remember-when-c50.herokuapp.com/facts", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}

export const getFactsByYear = (year) => {
    return fetch(`https://remember-when-c50.herokuapp.com/facts?year=${year}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}

export const createFact = (fact) => {
    return fetch("https://remember-when-c50.herokuapp.com/facts", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(fact)
    })
}

export const saveFact = (fact) => {
    return fetch("https://remember-when-c50.herokuapp.com/facts", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fact)
    })

}
export const deleteFact = (factId) => {
    return fetch(`https://remember-when-c50.herokuapp.com/facts/${factId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`,
            'Content-Type': 'application/json'
        }
    })
}
