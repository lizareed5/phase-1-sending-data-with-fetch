const body = document.querySelector('body');

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",       "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        })
    })
    .then(response => {
       return response.json()
    })
    .then(object => {
        body.append(object.id)
        body.append(object.name)
        body.append(object.email)

    })
    .catch(error => {
        // alert("There was an error.")
        body.append(error.message)
    })
}
submitData('Frank','frank@frank.com')