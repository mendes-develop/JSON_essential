const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const path = require("path");
const fs = require("fs");

app.use(cors());

app.get("/users/:id", (req, resp) => {
    console.log(req.params)
    console.log(req.query)


  fs.readFile(path.join(__dirname, "data.json.txt"), "utf8", function (error,data) {
    if (error) console.log(error);
    resp.json(JSON.parse(data));
  });

});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
