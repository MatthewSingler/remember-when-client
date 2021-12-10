export const getYears = () => {
    return fetch("http://localhost:8000/years", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}
