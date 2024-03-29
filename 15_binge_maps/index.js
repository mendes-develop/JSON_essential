
        // Global variables
        const api_key = API_KEY ;
        const maps_url = "http://dev.virtualearth.net/REST/v1/";
        const locations = "Locations?";
        const aerialImage = "Imagery/Metadata/Aerial/"
  
          function changeTitle(title){
              document.getElementById("title").innerText = title
          }
  
  
  
        function getCoordinates() {
          let params = {
            // postalCode: "10021",
            // maxResults: 3,
            addressLine: "65 Fleet Street, Jersey City",
            key: api_key,
          };
  
          let location_url = (function () {
            let query_params = new URLSearchParams(params);
            return maps_url + locations + query_params.toString();
          })();
  
          return fetch(location_url)
            .then((resp) => resp.json())
            .then((resp) => {
              changeTitle(params.addressLine)
              return resp.resourceSets[0].resources[0].point.coordinates;
            });
      }
  
  
  
        function getImgURL(coordinates){
          let params= {
              include: "ImageryProviders",
              zoomLevel: 12,
              key: api_key,
          }
  
          let image_url = (function(){
              let query_params = new URLSearchParams(params)
              return maps_url + aerialImage + coordinates[0] + "," + coordinates[1] + "?" +query_params.toString()
          }())
  
          return fetch(image_url)
          .then(resp => resp.json())
          .then(resp => {
              console.log(resp)
              // debugger
              return resp.resourceSets[0].resources[0].imageUrl
          })
        }
  
      // Call both fetch functions + slaps image to the DOM
        async function appendGeoImage() {
          let coordinates = await getCoordinates();
          let image_url = await getImgURL(coordinates);
          console.log(image_url)
          document.getElementById("geo-image").setAttribute("src", image_url)
        }
  
        // function invocation
        appendGeoImage()
  
  
      