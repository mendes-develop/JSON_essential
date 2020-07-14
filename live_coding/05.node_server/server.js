const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const path = require("path");
const fs = require("fs");
const validator = require("is-my-json-valid");
const bodyParser = require("body-parser");

function validateJSON() {
  let validate = validator(
    {
      required: true,
      type: "array",
      properties: {
        name: { required: true, type: "string" },
        classes: { required: true, type: "array" },
      },
      additionalProperties: false,
    },
    {
      verbose: true,
    }
  );

  console.log("should be valid", validate({ name: "John", classes: ["Javascript", "React"] }));
  console.log("should not be valid", validate({test: "Hello"}));
}

validateJSON()



app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, resp) => {

    let obj = req.body

     if (validate(obj)) resp.send("good data")
     else resp.send("bad data")

  resp.send("root");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
