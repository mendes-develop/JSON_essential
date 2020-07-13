const yql_api = "http://query.yahooapis.com/v1/public/yql?";
const api_key = API_KEY;
console.log(api_key);

let city = "New York City";
let params = {
  q: city,
  appid: api_key,
};

let query = new URLSearchParams(params).toString();
// api_key.search = query;

fetch("city.list.json")
  .then((resp) => resp.json())
  .then((resp) => {
    console.log(resp[0].country);
    let cities = resp.filter((city, index) => {
      if (index === 101) return;
      else return city.state === "NY";
    });
    let first_cities = cities.slice(0, 100);
    console.log(first_cities);
  });

fetch(`https://api.openweathermap.org/data/2.5/weather?${query}`)
  .then((data) => data.json())
  .then((response) => console.log(response));
