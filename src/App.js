import logo from './logo.svg';
import './App.css';
import Weather from './weather/Weather.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "weather-icons/css/weather-icons.min.css";
import React, { useState, useEffect } from 'react';


function App() {
  const [weatherResponse, setweatherResponse] = useState({ weather: "", sys: "", main: "", name: "" });
  
  const API_KEY = "49354479869ae18d7dfbe48bbd9eced7";
  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Istanbul,Turkey&appid=${API_KEY}`).then((res) => res.json()).then((data) => setweatherResponse(data));
    
    
    
    }, [])

  const { weather, sys, main, name } = weatherResponse;
  const { description, id } = weather;
  console.log(id)
  
  const weatericon = function (rangeId) {

    switch (true) {
      case rangeId >= 200 && rangeId < 232:
      return "wi-thunderstorm";
        break;
      case rangeId >= 300 && rangeId < 321:
        return "wi-sleet";
        break;
      case rangeId >= 500 && rangeId < 521:
        return "wi-storm-showers";
        break;
      case rangeId >= 600 && rangeId < 622:
        return  "wi-snow";
        break;
      case rangeId >= 700 && rangeId < 781:
        return "wi-fog";
        break;
      case rangeId ===800 :
        return "wi-day-sunny";
        break;
      case rangeId >= 801 && rangeId <= 804:
        return "wi-day-fog";
        break;
      default:
       return "wi-day-fog"; 
    }
    
  }


  console.log(weatherResponse);
  
  const  convertTemp=function(temp){
    const cell = Math.floor(temp - 273);
    return cell;
  }
  
  weatericon(300);
  
 

  return (
    <div className="App">
      <Weather city={name}
        country={sys.country}
        temp={convertTemp(main.temp)}
        min={convertTemp(main.temp_min)}
        max={convertTemp(main.temp_max)}
        description={description}
        icon={weatericon(id)}
        />
      
    </div>
  );
}

export default App;
