
const url = "https://reqres.in/api"
const newUser = {
    name: "morpheus",
    job: "leader",
}

// const existentUser = {
//     email: "eve.holt@reqres.in",
//     password: "pistol"
// }


// function getData() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://reqres.in/api/users");

//   xhr.onload = function () {
//     console.log(xhr.response);
//     console.log(JSON.parse(xhr.response));
//   };

//   xhr.send();
// }

// function sendData() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://reqres.in/api/users");

//   xhr.addEventListener("load", function () {
//     console.log("\n");
//     console.log(xhr.response);
//     console.log(JSON.parse(xhr.response));
//   });

//   xhr.send(
//     JSON.stringify({
//       name: "morpheus",
//       job: "leader",
//     })
//   );
// }

function xhrRequest(method, customURL, data){
    let xhr = new XMLHttpRequest();
    xhr.open(method, customURL);
    xhr.responseType = 'json'
    xhr.onload = function(){ console.log(xhr.response)}
    if (data){
        xhr.setRequestHeader("Content-Type", "application/json")
    }
    xhr.onerror = function(){ console.log(" Server/Request Error") }
    xhr.send(JSON.stringify(data))

}

// GET data from server
xhrRequest("GET", `${url}/users`)

// Creates new user
xhrRequest("POST", `${url}/users`, newUser)

// // Retrives user from database
// xhrRequest("POST", `${url}/users`, existentUser)



// let getButton = document.getElementById("get")
// let postButton = document.getElementById("post")
// getButton.addEventListener('click', getUsers)
// postButton.addEventListener('click', updateUser)

