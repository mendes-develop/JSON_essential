let list = document.getElementById("list");
// fetch() => promises
// XMLHTTREQUEST object => native
// $AJAX() => jquery


// //MARK: FETCH API
// fetch("data.json.txt") // ASYNCHROCRONOUS
//   .then(function (response) {
//     return response.text(); // ASYNCHROCRONOUS
//   })
//   .then(function (responseText) {
//     let usersOBJ = JSON.parse(responseText);
//     console.log(usersOBJ)
//   });


// // MARK: XMLHTTPREQUEST
// let xhr = new XMLHttpRequest()
// xhr.open("GET", "data.json.txt") // initiate (method, url)
// xhr.responseType = "json"
// xhr.onload = function(){ console.log( xhr.response ) }
// xhr.send()



// // MARK: jQUERY LIBRARY
// $.get("data.json.txt", function(data, error){
//     console.log(JSON.parse(data))
// })



$.ajax({
  url: "data.json.txt",
  type: "GET",
  //  dataType: "json", // specify what's the returned data type
  //   data: null, // data to be sent if POST, PATCH, PUT
  success: function(data) {
    console.log(data)
    let parsedData = JSON.parse(data);
    
    parsedData.users.forEach((user) => {
      list.innerHTML += `<li>${ user.name }</li>`;
    });
    
  },
});

// "GET, POST, PUT/PATCH, DELETE"

//
//
//
//
//
//
//
//
//
//
//
//
//


//   function sayHello(){ } => const sayHello = () => something gets returned // implicit return

// function parseJSON(data){
//     console.log(data)

//     let data_parsed = JSON.parse(data)
//     console.log(data_parsed)
//     console.log(typeof data_parsed)

//     let user = data_parsed.users[0]
//     console.log(user)
//     console.log("Name: ", user.name)
//     console.log("Username: ", user.username)
//     console.log("Name:", user.email)

//     let data_stringfy = JSON.stringify(data_parsed)
//     console.log(data_stringfy)

//     console.log("data", typeof data)
//     console.log("user", typeof user)
//     console.log("data stringfy", typeof data_stringfy)

//     console.log("BREAK","\n")
// }

// function getLocalData() {
//     let xhr = new XMLHttpRequest()
//     xhr.open("GET", "data.json.txt")
//     xhr.onload = function () { parseJSON(this.responseText) }
//     xhr.send()
// }

// getLocalData()

// $.get("data.json.txt", function(data, resp){
//     parseJSON(data)
//     console.log(resp)
// })

// fetch("data.json.txt")
// .then(resp => resp.text())
// .then(resp => parseJSON(resp))
