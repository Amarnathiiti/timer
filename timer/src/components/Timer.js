import React from "react";
import { useState } from "react";


function Timer(props) {
   
     const [time, setTime] = useState({ minutes: 10, seconds: 0 });
    // var time = props.time;
    // var setTime = props.setTime;
    
    var myInterval=setInterval(() => {

        if (time.seconds > 0) {
            setTime({minutes:time.minutes,seconds:time.seconds-1})
        }
        if (time.seconds === 0) {
            if (time.minutes === 0) {
                
                console.log("time up");
                clearInterval(myInterval);
                props.onTimeUp();
               
            } else {
                setTime({ minutes: time.minutes - 1, seconds: 59 })
            }
            } 
    }, 1000)

return <div className="bg-red-100 float-right">
    <h1>Time Remaining: {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h1>
    </div>
}

export default Timer;
