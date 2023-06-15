import React, { useState } from "react";
import "../BMI Calculeter/bmi.css"
const Calcu = () => {

    const [weight,setWeight]=useState(0)
    const [height,setHeight]=useState(0)
    const [bmi,setBmi]=useState('')
    const [message,setMessage]=useState('')



const calcBmi=(e)=>{
   e.preventDefault();
   if(weight ===0 || height===0){
    alert("plase Enter Valid weight and height")
   }else{
    const bmi=(weight/(height*height)*703)
    setBmi(bmi.toFixed(1));

    if(bmi<25){
        setMessage('you are underweight')
    }else if(bmi>=25 && bmi <30){
           setMessage("you are a healthy weight")
    }else{
        setMessage("you are overWeight")
    }
   }
}

//reload

const reload=()=>{
    window.location.reload();
}

  return (
    <>
      <div className="App">
        <div className="container">
          <h2>BMI Calculeter</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label>Weight (ibs)</label>
              <input
                type="text"
                placeholder="Enter Weight value"
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Height (ibs)</label>
              <input
                type="text"
                placeholder="Enter Height value"
                value={height}
                onChange={(e)=>setHeight(e.target.value)}

              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button className="btn btn-outline" type="submit" onClick={reload}>
                Reload
              </button>
            </div>
            <div className="center">
              <h3>Your BMI Is :{bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Calcu;
