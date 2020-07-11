const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 3000


// fs.writeFile(path.join(__dirname, "data.json.txt"), '{"users" : {"id": 1}}', function(error){
//     if (error) throw error
//     console.log("file created")
// })

app.use(cors())

app.get("/users", (req, resp)=> {
    // console.log(req.params) //:id
    // console.log(req.query)
    // console.log(path.basename(__filename))

    resp.json({"Hello" : "hello"})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})