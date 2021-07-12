import React from 'react'
import "./Form.css"

const Form = (props) => {
    return (
        <div className="container" >
            <form onSubmit={props.loadweather} >
                 <div className="row">
                

                <div className="col-md-3">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Coutry"/>
                </div>

                <div className="col-md-3 mt-md-0 text-md-left">
                    <button type="button" className="btn btn-warning">Get Weather</button>
                </div>
            </div>
           </form>
            
        </div>
    )
}

export default Form
