const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// const path = require("path");
// const fs = require("fs");
// var validator = require("is-my-json-valid");

// var validate = validator({
//   required: true,
//   type: "object",
//   properties: {
//     text: { required: true, type: "string" },
//     array: { required: true, type: "array" },
//   },
//   additionalProperties: false,
// }, {
//   verbose: true
// });

// console.log("should be valid", validate({ text: "world", array: [] }));
// console.log("should not be valid", validate({}));

// app.use(cors());

// app.get("/users/:id", (req, resp) => {
//   console.log(req.params);
//   console.log(req.query);

//   fs.readFile(path.join(__dirname, "data.json.txt"), "utf8", function (
//     error,
//     data
//   ) {
//     if (error) console.log(error);
//     resp.json(JSON.parse(data));
//   });
// });