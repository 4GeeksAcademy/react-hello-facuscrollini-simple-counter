//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter1= 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
setInterval(()=> {
    if(counter1 > 9) {
        counter1=0;
        counter2++
    }
    if(counter2 > 9) {
        counter2= 0;
        counter3++
    }
    if(counter3 > 9){
        counter3= 0;
        counter4++
    }
    if(counter4 > 9){
        counter4 = 0;
        counter5++
    }
    if(counter5 > 9) {
        counter5 = 0;
        counter6++
    }
    if(counter6 >9){
        counter1= 0;
        counter2=0;
        counter3=0;
        counter4=0;
        counter5=0;
        counter6=0;
    }
    ReactDOM.createRoot(document.getElementById('app')).render(<Home counter1={counter1} counter2={counter2} counter3={counter3} counter4={counter4}counter5={counter5} counter6={counter6} />);
    counter1++}, 1000)
    
