const url = "https://reqres.in/api/users";
const user = {
  email: "Developer_Life",
  password: "Secret",
};


function fetchRequest(method, data) {
  return fetch(url, {
    method: method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status >= 400) {
      return response.json().then((errorData) => {
        const error = new Error("Something went wrong");
        error.data = errorData;
        throw console.error();
      });
    }
    return response.json();
  });
}

const getUsers = () => {
  fetchRequest()
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const updateUser = () => {
  fetchRequest("POST", user)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

let getButton = document.getElementById("get");
let postButton = document.getElementById("post");
getButton.addEventListener("click", getUsers);
postButton.addEventListener("click", updateUser);
