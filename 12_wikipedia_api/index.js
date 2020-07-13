var url = "https://en.wikipedia.org/w/api.php";

var params = {
action: "query",
list: "search",
srsearch: "Nelson Mandela",
format: "json"
};

url = url + "?origin=\*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){ return response.json() })
    .then(function(response) {
        if (response.query.search[0].title === "Nelson Mandela"){
            console.log("Your search page 'Nelson Mandela' exists on English Wikipedia" );
            console.log(response)
        }
    })
    .catch(function(error){console.log(error);});


    // let page_by_id = "https://en.wikipedia.org/?curid=";
    //   let query = {
    //     action: "query",
    //     format: "json",
    //     list: "search",
    //     srsearch: "Brazil",
    //   };

    //   let params = new URLSearchParams(query).toString();

    //   $.getJSON(
    //     "https://en.wikipedia.org/w/api.php?&callback=?",
    //     query,
    //     function (data) {
    //       console.log(data);
    //     }
    //   );

    //   var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
    //   //   var params = "action=query&list=allimages&ailimit=3&format=json";

    //   /**
    //    * Send the request to get the images
    //    */
    //   fetch(apiEndpoint + "?" + params + "&origin=*")
    //     .then(function (response) {
    //       return response.json();
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     });

    //   const proxyurl = "https://cors-anywhere.herokuapp.com/";

    //   let custom_query = {
    //     action: "query",
    //     format: "json",
    //     prop: "revisions",
    //     titles: "Main_Page",
    //   };

    //   let custom_params = new URLSearchParams(custom_query).toString();

    //   fetch(proxyurl + "https://en.wikipedia.org/w/api.php?" + custom_params)
    //     .then((resp) => resp.json())
    //     .then((resp) => console.log(resp));