// MARK 1
// Similarities between JSON and Javascript

const user1 = {
    name: "Alex", 
    age: 26,
    admin: true,
    courses: ["Javascript" , "React", "Swift", "Ruby", "You \"know\"", "Some \n text"],
    favoriteTeam : null,
    hexa: 0xFF,
    phoneNumber : {
      home: "555-555-5555",
      cell: "555-123-5555"
    },
    date: new Date()
  }
  
  const json5 = {
    // comments
    unquoted: 'and you can quote me on that',
    singleQuotes: 'I can use "double quotes" here',
    lineBreaks: "Look, Mom! \
  No \\n's!",
    hexadecimal: 0xdecaf,
    leadingDecimalPoint: .8675309, andTrailing: 8675309.,
    positiveSign: +1,
    trailingComma: 'in objects', andIn: ['arrays',],
    "backwardsCompatible": "with JSON",
  }
  
  console.log(user1)
  console.log(JSON.stringify(user1))
  console.log('\n')
  console.log(json5)
  console.log(JSON.stringify(json5))
  
  console.log('\n')
  
  
  
  // JSON data
  console.log('{"name":"Alex",\n  "age":26,\n "admin":true,\n "courses":["Javascript","React","Swift","Ruby"],\n "favoriteTeam":null}')
  
  
  
  
  
  
  
  
  
  
  // var parser, xmlDoc;
  // var text = "<bookstore><book>" +
  // "<title>Everyday Italian</title>" +
  // "<author>Giada De Laurentiis</author>" +
  // "<year>2005</year>" +
  // "</book></bookstore>";
  
  // parser = new DOMParser();
  // xmlDoc = parser.parseFromString(text,"text/xml");
  
  // document.getElementById("demo").innerHTML =
  // xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // MARK 2
  // Create a JSON object with all of its supported data types
  
  // const friend = {
  //   name: "Ann",
  //   age: 70,
  // }
  
  // const user1 = {
  //   name: "Alex",
  //   age: 26,
  //   admin: true,
  //   courses: [
  //      ["Javascript" , "React", "Swift", "Ruby"], ["Math", "Science", "Biology"]
  //    ],
  //   friends: friend
  // }
  
  // let dataToJSON = JSON.stringify(user1)
  // console.log(dataToJSON)
  
  // console.log("\n")
  
  // let dataFromJSON = JSON.parse(dataToJSON)
  // console.log(dataFromJSON)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // // MARK 3: Safe unrapping
  
  // let fromAPI = {"name":"Alex","age":26,"admin":true,"courses":["Javascript","React","Swift","Ruby"],"friends":{"name":"Ann","age":70}}
  
  
  // try {
  // // let dataFromAPI = JSON.parse('{"unicode_special" : "\u00pi"}')
  // console.log(dataFromAPI)
  
  // } catch(error) {
  //   console.log("Invalid JSON")
  // }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  