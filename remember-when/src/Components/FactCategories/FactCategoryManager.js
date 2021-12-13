export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}