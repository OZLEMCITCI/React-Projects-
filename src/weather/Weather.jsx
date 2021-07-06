import React from 'react'

const Weather = () => {
    return (
        <div className="contanier">
            <div className="cards">
                <h1>London</h1>
                <h5 className="py-4">
                    <i class="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="py-3">25&deg;</h1>
                {/* minmax funksiyonu */}
                {minmaxTemp(23, 35)}
                
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
