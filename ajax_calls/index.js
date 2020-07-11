
const url = "https://reqres.in/api/"
const newUser = {
    name: "morpheus",
    job: "leader",
}

const existentUser = {
    email: "eve.holt@reqres.in",
    password: "pistol"
}


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

function request(method, customURL, handleFunction, data){
    let xhr = new XMLHttpRequest();
    xhr.open(method, customURL);
    xhr.responseType = 'json'
    xhr.onload = handleFunction
    if (data){
        xhr.setRequestHeader("Content-Type", "application/json")
    }
    xhr.onerror = function(){ console.log(" Server/Request Error") }
    xhr.send(JSON.stringify(data))

}

// GET data from server
request("GET", `${url}users`, () => { 
    console.log(this.response) 
})

// Creates new user
request("POST", `${url}users`, function(){
    console.log(this.response)
}, newUser)

// Retrives user from database
request("POST", `${url}register`, function(){
    if (this.status >= 400) console.log("error:", this.response.error)
    else {
        console.log(this.response)
    }
}, existentUser)


