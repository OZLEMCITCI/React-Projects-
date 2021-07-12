import logo from './logo.svg';
import './App.css';
import Weather from './weather/Weather.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "weather-icons/css/weather-icons.min.css";
import React, { useState, useEffect } from 'react';
import Form from './form/Form';


function App() {
  const [weatherResponse, setweatherResponse] = useState({ weather: "", sys: "", main: "", name: "" });
 
  
  const API_KEY = "49354479869ae18d7dfbe48bbd9eced7";
  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Ankara,Turkey&appid=${API_KEY}`).then((res) => res.json()).then((data) => setweatherResponse(data));
     
  }, [])
  

  const { weather, sys, main, name } = weatherResponse;
  const { description, id } = weather;
  
  
 
  return (
    <div className="App">
     
      





      
      <Weather city={name}
        country={sys.country}
        temp={main.temp}
        min={main.temp_min}
        max={main.temp_max}
        description={description}
        id={id}
        />
      
    </div>
  );
}

export default App;
