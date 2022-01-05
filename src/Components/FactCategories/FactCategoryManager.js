export const getCategories = () => {
    return fetch("https://remember-when-c50.herokuapp.com/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}