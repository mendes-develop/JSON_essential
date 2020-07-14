let oldPost = {
  userId: 99,
  title: "JSON Essentials",
  body: "What a good day to learn JSON",
};

$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/1", // [comments]
  type: "GET",
  dataType: "json",
  success: function (data) {
    // console.log(data);
  },
  error: function (error) {
    console.log(error);
  },
});


$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/1", // comments
  type: "DELETE", // Create new data => PUT/PATCH/DELETE
  dataType: "json",
//   data: oldPost,
  success: function (data) {
    console.log(data)
  },
  error: function (error) {
    console.log(error);
  },
});


