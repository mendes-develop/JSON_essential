require('dotenv').config()
const express = require("express")
const request = require("request")
const { uuid } = require('uuidv4')
const cors = require("cors")
const app = express()
const PORT = 3000

const subscriptionKey = process.env.TRANSLATOR_TEXT_SUBSCRIPTION_KEY
const endpoint = process.env.TRANSLATOR_TEXT_ENDPOINT

// var key_var = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';
// if (!process.env[key_var]) {
//     throw new Error('Please set/export the following environment variable: ' + key_var);
// }
// var subscriptionKey = process.env[key_var];
// var endpoint_var = 'TRANSLATOR_TEXT_ENDPOINT';
// if (!process.env[endpoint_var]) {
//     throw new Error('Please set/export the following environment variable: ' + endpoint_var);
// }
// var endpoint = process.env[endpoint_var];

console.log(endpoint)
console.log(subscriptionKey)


let options = {
    method: 'POST',
    baseUrl: endpoint,
    url: 'translate',
    qs: {
      'api-version': '3.0',
      'to': ['de', 'it']
    },
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuid().toString()
    },
    body: [{
          'text': 'Hello World!'
    }],
    json: true,
};

request(options, function(err, res, body){
    console.log(err)
    console.log(JSON.stringify(body, null, 4));
    // res.send("Hello")
});



app.use(cors())

app.get('/', (req, resp) => {
    
})

app.listen(PORT, ()=> console.log("Listening on port ", PORT))
