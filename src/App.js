
import './App.css';
import Weather from './weather/Weather.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "weather-icons/css/weather-icons.min.css";
import React, { useState, useEffect } from 'react';


function App() {
  const [weatherResponse, setweatherResponse] = useState({ weather: "", sys: "", main: "", name: "" });
  const [goster, setgoster] = useState(false)

  // const [city, setcity] = useState("");
  // const [country, setcountry] = useState("")

  // const [city1, setcity1] = useState("");
  // const [country1, setcountry1] = useState("")
  const [hata, sethata] = useState(false)

  const { weather, sys, main, name } = weatherResponse;
  const { description, id } = weather;

  
  
 

  
  function updateInput(event) {
    event.preventDefault();
    setcity1(city);
    setcountry1(country);
     const API_KEY = "49354479869ae18d7dfbe48bbd9eced7";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1},$Turkey&appid=${API_KEY}`).then((res) => { if (res.status >= 200 && res.status < 299) { return res.json() } else { sethata(true) }}).then((data) => setweatherResponse(data));
    
    setgoster(true);
    console.log(city1);
    console.log(country1)
    
  }

  return (
    <div className="App ">
      

 <form onSubmit={updateInput}>
        
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
              value={city}
              onChange={(e)=>setcity(e.target.value)}
              
              
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
              value={country}
              onChange={(e)=>setcountry(e.target.value)}
              
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button type="submit" value="add song" className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
      <div className="m-5 ">
        {!hata&&goster&& <Weather city={name}
        country={sys.country}
        temp={main.temp}
        min={main.temp_min}
        max={main.temp_max}
        description={description}
        id={id}
        /> }
       </div>
       
        

      
      
    </div>
  );
}

export default App;
