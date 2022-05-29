import React, { useRef, useState } from "react";

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours+ 'h'+ ":" + minutes+ "m" + ":" + seconds +"s" + "." + milliseconds;
}

const Stopwatch = () => {
  const [watch, setWatch] = useState(0);
  const timerId = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isStop, setIsStop] = useState(false);

  const startHandler = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((watch) => watch + 100);
      }, 100);
      timerId.current = id;
    }
    setIsRunning(true);
  };

  const stopHandler = () => {
    // stop timer
    clearInterval(timerId.current);
    timerId.current = null;
    setIsRunning(false);
    setIsStop(true);
  };
  const resetHandler = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setWatch(0);
    setIsRunning(false);
  };

  
  const resumeHandler = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((watch) => watch + 100);
      }, 100);
      timerId.current = id;
    }
   
    setIsRunning(true);
    setIsStop(false);
  };

  return (
    <div className="Stopwatch">
      {/* <button>Stopwatch</button> */}
      <h2 className="Time">{msToTime(watch)}</h2>
      <div className="btnDiv">
        <div className="btnbox">
          {!isRunning && !isStop && (
            <button onClick={startHandler} className="btn1">
              START
            </button>
          )}
          {isRunning && (
            <button onClick={stopHandler} className="btn1">
              STOP
            </button>
          )}

          {isStop && (
            <button onClick={resumeHandler} className="btn1">
              RESUME
            </button>
          )}

          <button
            onClick={resetHandler}
            className="btn2"
            disabled={!isRunning && !isStop}
          >
            RESET
          </button>

        </div>
        
          <div className="iconDiv">
            <img src="https://cdn-icons-png.flaticon.com/512/608/608417.png" alt="" />
            <img src="https://cdn-icons.flaticon.com/png/512/1263/premium/1263334.png?token=exp=1653815072~hmac=9ace4870a8409d60c52baf5a7c0fb16c" alt="" />
          </div>
      </div>
    </div>
  );
};

export default Stopwatch;
