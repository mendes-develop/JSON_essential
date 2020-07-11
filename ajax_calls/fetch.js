let getButton = document.getElementById("get")
let postButton = document.getElementById("post")

const url = "https://reqres.in/api/";
const user = {
    // "email": "sydney@fife",
    password: "ronaldo"
}
const id = 2;

// function getData() {
//   fetch(url + "users/2")
//     .then((response) => response.json())
//     .then((body) => console.log(body));
// }

// function updateData(customUrl, method, data = {}) {
//   return fetch(customUrl, {
//     method: method,
//     mode: 'cors',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//   .then(response => response.json())
// }

// async function updateUser(){
//  const newUser = await updateData(url + "users/" + id, "PATCH", user)
//  console.log(newUser)
// }


// getData()
// updateUser()

function fetchRequest(url, method, data){
    return fetch(url, {
        method: method,
        headers: data ? {"Content-Type" : "application/json"} : {},
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status >= 400){
            return response.json().then(errorData => {
                const error = new Error("Something went wrong")
                error.data = errorData
                throw console.error();
            })
        }
        return response.json()
    })
}

const getUsers = () => {
    fetchRequest(url+"users")
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const updateUser = () => {
    fetchRequest(url+"api/login", "POST", user)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

getButton.addEventListener('click', ()=> {

    getUsers()
})
postButton.addEventListener('click', updateUser)
