export const getYears = () => {
    return fetch("https://remember-when-c50.herokuapp.com/years", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rw_token")}`
        }
    })
        .then(response => response.json())
}
