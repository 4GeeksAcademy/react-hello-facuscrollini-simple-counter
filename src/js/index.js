//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

    //setInterval(()=> {
    //if(number[5] > 9) {
    //    number[5]=0;
    //    number[4]++
    //}
    //if(number[4] > 9) {
    //    number[4]= 0;
    //    number[3] = number[3] + 1
    //}
    //if(number[3] > 9) {
    //    number[3]= 0;
    //    number[2] = number[2] + 1
    //}
    // if(number[2] > 9) {
    //    number[2]= 0;
    //    number[1] = number[1] + 1
    //}
    //
    //if(number[1] > 9) {
    //        number[1]= 0;
    //        number[0] = number[0] + 1
    //    }
    //if(number[0] > 9){
    //   number[5]
    //number[4]
    //number[3]
    //number[2]
    //number[1]
    //number[0]
    //}
    ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);