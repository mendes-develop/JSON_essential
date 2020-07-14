
const flickr_API =
  "ps://www.flickr.com/services/feeds/photos_public.gne?callback=?htt";

let req = {
  tags: "new york",
  format: "json",
};

$.getJSON(flickr_API, req, function (data) {
  console.log(data);
});

const proxyurl = "https://cors-anywhere.herokuapp.com/";
let search = new URLSearchParams(req).toString();

function jsonFlickrFeed(data) {
  console.log(data);
}

let script = document.createElement("script");
script.type = "text/javascript";
script.src = `https://www.flickr.com/services/feeds/photos_public.gne?${search}`;
console.log(script.src);
document.head.appendChild(script);

fetch(`https://www.flickr.com/services/feeds/photos_public.gne?${search}`, { mode: "no-cors" })
.then(resp => resp.json())
.then(resp => console.log(resp))
.catch(error => console.log(error))

