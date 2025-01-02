import React, { useInsertionEffect, useLayoutEffect } from 'react';
import Digits from './Digits';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isCountDown, setIsCountDown] = useState(false);
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        let interval = null
        if (isRunning) {
            interval = setInterval(() => {
                setCounter(numero => {
                    if (isCountDown) {
                        if (numero === alert) {
                            Swal.fire({
                                icon: "warning",
                                title: "Your time it's getting over",
                                text: "Please make sure you are using your time wisely.",
                                
                            })
                        }
                        if (numero > 0) {
                            return numero - 1
                        }
                        else {
                            clearInterval(interval)
                            return 0
                        }
                    } 
                     else {
                        if(numero === alert){
                            Swal.fire({
                                icon: "success",
                                title: "Congratulations",
                                text:`It's been ${numero} seconds and you're still here, make sure your achiving your tech skills, good luck body!`,
                                
                            })
                        }
                        return numero + 1
                    }
                })
            }, 1000)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isRunning, isCountDown, alert])

    const handleStartCountdown = (number) => {
        setCounter(number)
        setIsCountDown(true);
        setIsRunning(true);

    }

    const handleStartNormal = () => {
        setCounter(0);
        setIsRunning(true);
        setIsCountDown(false)
    };

    const handleResume = () => {
        if (isCountDown && counter > 0) {
            setIsRunning(true)
        } else if (!isCountDown) {
            setIsRunning(true)
        }
    }


    const handleStop = () => {
        setIsRunning(false);
    };

    const digi6 = Math.floor(counter % 10);
    const digi5 = Math.floor((counter % 100) / 10);
    const digi4 = Math.floor((counter % 1000) / 100);
    const digi3 = Math.floor((counter % 10000) / 1000);
    const digi2 = Math.floor((counter % 100000) / 10000);
    const digi1 = Math.floor((counter % 1000000) / 100000);




    return (<>
    
     <div className="container-fluid bg-black text-white
    w-100 h-50">
        <div className=" d-flex justify-content-center gap-2">
            <div className="my-auto border border-top-0 border-bottom-0 border-dark px-3 py-3">
                <i style={{ fontSize: "50px" }} className="fa-regular fa-clock "></i>
            </div>
            <Digits number={digi1} />
            <Digits number={digi2} />
            <Digits number={digi3} />
            <Digits number={digi4} />
            <Digits number={digi5} />
            <Digits number={digi6} />

        </div>

    </div>
        <div className="container d-flex justify-content-center gap-2">
            <button type="button" className="btn btn-warning m-2" onClick={handleStartNormal}>Start Normal</button>
            <button onClick={handleStop} className="btn btn-danger m-2">STOP</button>
            <button onClick={handleResume} text="Resume" className="btn btn-success m-2">Resume</button>
            <input onChange={numero => handleStartCountdown(parseInt(numero.target.value))} type="text" className="form-control m-2 w-25" placeholder="Countdown number" aria-label="Countdown number" aria-describedby="button-addon2" />
            <input className="form-control m-2 w-25" placeholder="Put where you want an alert" onChange={number => setAlert(parseInt(number.target.value))}></input>
        </div>
    </>)
}


export default Counter