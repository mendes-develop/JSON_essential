const url = "http://localhost:3000/users/";
let users;

const fetchData = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      users = resp;
      resp.forEach((user) => {
        slapUserOnTheDOM(user);
      });
    });
};

fetchData();

function slapUserOnTheDOM(user) {
  let container = document.getElementById("container");
  let randNumber = Math.floor(Math.random() * 8 + 1);
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  let card = `
                <div class="col mb-3">
                <div class="card">
                    <img src="https://via.placeholder.com/340x120/${randomColor}/00000" alt="Cover" class="card-img-top">
                    <div class="card-body text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar${randNumber}.png" style="width:100px;margin-top:-65px" alt="card" class="img-fluid img-thumbnail rounded-circle border-0 mb-3">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="text-secondary mb-1">${user.username}</p>
                    <p class="text-muted font-size-sm">${user.email}</p>
                    </div>
                    <div class="card-footer">
                    <button onclick="deleteUser()" class="btn btn-light btn-sm bg-white has-icon btn-block" type="button">DELETE</button>
                    </div>
                </div>
                </div>
            `;
  container.innerHTML += card;
}
const getData = () => {
  $.getJSON(url, function (data) {
    console.log(data);
  });
};

function deleteUser(){
    $.ajax({
        url: url + users[0].id,
        dataType: "json",
        method: "DELETE",
        data: {name: "John", username: "Oliver", email: "dev@email.com" },
        success: function(data){ console.log(data)}
    })

}

function postUser(user){
    $.ajax({
        url: url,
        dataType: "json",
        method: "POST",
        data: {name: user.name, username: user.username, email: user.email },
        success: function(data){ console.log(data)}
    })

}

function populateUsers(){
  $.ajax({
    url:"https://jsonplaceholder.typicode.com/users",
    dataType: "json",
    method: "GET",
    success: function(data){
      data.forEach(user => postUser(user))
    }
  })
}


getData();
// populateUsers()
// postUser()
