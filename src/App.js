import logo from './logo.svg';
import './App.css';
import Weather from './weather/Weather.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import"weather-icons/css/weather-icons.min.css"

function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
