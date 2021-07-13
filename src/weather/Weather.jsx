import React from 'react'
import"./weather.css"

const Weather = (probs) => {
    //const [icon, seticon] = useState("")
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
                return "wi-snow";
                break;
            case rangeId >= 700 && rangeId < 781:
                return "wi-fog";
                break;
            case rangeId === 800:
                return "wi-day-sunny";
                break;
            case rangeId >= 801 && rangeId <= 804:
                return "wi-day-fog";
                break;
            default:
                return "wi-day-fog";
        }
    }

    const  convertTemp=function(temp){
    const cell = Math.floor(temp - 273);
    return cell;
  }




    return (
        <div className="contanier mt-3">
            <div className="cards">
                <h1>{probs.city},{probs.country }</h1>
                <h5 className="py-4">
                    <i className={`wi ${weatericon(probs.id)} display-1`}></i>
                </h5>
                <h1 className="py-3">{ convertTemp(probs.temp)}&deg;</h1>
                {/* minmax funksiyonu */}
                {minmaxTemp(convertTemp(probs.min), convertTemp(probs.max))}
                
                <h4 className="py-3">Slow Rain</h4>
            </div>
            
            
        </div>
    )
}

function minmaxTemp(min, max) {
    return(
    <h3>
        <span className="px-3">{min}&deg;</span>
        <span className="px-3">{max}&deg;</span>
        
    </h3>)
}

export default Weather
