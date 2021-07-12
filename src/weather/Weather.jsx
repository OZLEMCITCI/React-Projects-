import React from 'react'

const Weather = (probs) => {
    return (
        <div className="contanier">
            <div className="cards">
                <h1>{probs.city},{probs.country }</h1>
                <h5 className="py-4">
                    <i className={`wi ${probs.icon} display-1`}></i>
                </h5>
                <h1 className="py-3">25&deg;</h1>
                {/* minmax funksiyonu */}
                {minmaxTemp(probs.min, probs.max)}
                
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
