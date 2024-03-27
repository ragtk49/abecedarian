import React, {useState} from'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  

  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "d0ba29e28b04ecd5087843849797a3ab"

  const search = async (evt) =>{
    if(evt.key === "Enter"){
      try{
        const response = await axios.get(BASE_URL,{
          params:{
            q:query,
            units:"metric",
            APPID:API_KEY
          }
        });
        setWeather(response.data);
        setQuery("");
      }
      catch(error){
        console.error(error);
      }
    }
  }


  return (
   <div>
      <h1>Weather App</h1>
      <input 
       type = "text"
       placeholder="Enter a city name"
       value={query}
       onChange={(e) =>setQuery(e.target.value)}
       onKeyDown={search}
       />
       {weather.main && (
        <div>
          <p>{weather.name}, {weather.sys.country}</p>
          <p>{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].main}</p>
        </div>
       )}
   </div>
  );
}

export default App;
