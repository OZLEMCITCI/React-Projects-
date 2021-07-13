
import './App.css';
import Weather from './weather/Weather.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "weather-icons/css/weather-icons.min.css";
import React, { useState, useEffect } from 'react';
import "./form/Form.css"

function App() {
  const [weatherResponse, setweatherResponse] = useState({ weather: "", sys: "", main: "", name: "" });

  const { weather, sys, main, name } = weatherResponse;
  const { description, id } = weather;
  const [goster, setgoster] = useState(false)

  const API_KEY = "49354479869ae18d7dfbe48bbd9eced7";


  const [form, setform] = useState({ city: "", country: "" });
  const { city, country } = form;

  function updateInput(event) {
   const { name, value } = event.target;
    setform(() => {
      return {
        ...form,
        [name]: value,
      };
    });
    setgoster(!goster)// buda sizle yaptigimiz ornekteki gibi calismiyor anlamadim neden normalde submit ettigimde bunun <Weather/> commenantini visible yapmasi lazim
    
    //problem burda city ve country form dan gelmiyor
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`).then((res) => res.json()).then((data) => setweatherResponse(data));
    
    
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
              //value(city)    comment out yaptim cunku value olunca input a text giremiyorum
              
              
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
              //value={country}
              
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button type="submit" className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>


<h1>{city}</h1>
     
      


     {goster&&<Weather city={name}
        country={sys.country}
        temp={main.temp}
        min={main.temp_min}
        max={main.temp_max}
        description={description}
        id={id}
        />}

      
      
    </div>
  );
}

export default App;
