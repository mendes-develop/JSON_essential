https://openweathermap.org/api

### Current Weather Data
- Access current weather data for any location including over 200,000 cities
- Current weather is frequently updated based on global models and data from more than 40,000 weather stations
- JSON, XML, and HTML formats
Available for both Free and paid subscriptions
Hourly Forecast 4 days

API call:
```
api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
```
```
api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}
```
```
api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key}
```

#### Parameters:
q city name, state code and country code divided by comma, use ISO 3166 country codes. You can specify the parameter not only in English. In this case, the API response should be returned in the same language as the language of requested location name if the location is in our predefined list of more than 200,000 locations.

##### Examples of API calls:
```
api.openweathermap.org/data/2.5/weather?q=London
```
```
api.openweathermap.org/data/2.5/weather?q=London,uk
```