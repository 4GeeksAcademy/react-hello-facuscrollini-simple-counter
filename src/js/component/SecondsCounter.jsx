import React from 'react'
import Digits from './Digits'


const Counter = (props) => {
    return(<> <div className="container-fluid bg-black text-white
    w-100 h-50">
        <div className=" d-flex justify-content-center gap-2">
        <div className="my-auto border border-top-0 border-bottom-0 border-dark px-3 py-3">
        <i  style={{fontSize:"50px"}} className="fa-regular fa-clock "></i>
        </div>
        <Digits number={props.counter6}/>
        <Digits number={props.counter5}/>
        <Digits number={props.counter4}/>
        <Digits number={props.counter3}/>
        <Digits number={props.counter2}/>
        <Digits number={props.counter1}/>

        </div>
    </div>
    </>)
}

export default Counter