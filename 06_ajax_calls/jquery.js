$(function () {
  let getButton = $("#get");
  let postButton = $("#post");

  const url = "https://reqres.in/api/users";
  const newUser = {
    name: "morpheus",
    password: "test123",
  };

  function ajax_call(method = "GET", user = null) {
    $.ajax({
      url: url,
      type: method,
      dataType: "json",
      data: newUser,
      success: function (data) {
        console.log("success"), console.log(data);
      },
      error: function (error) {
        console.log("error");
        console.log(error);
      },
    });
  }

  getButton.on("click", ()=>  ajax_call() );
  postButton.on("click", ()=>  ajax_call("POST", newUser))
});
