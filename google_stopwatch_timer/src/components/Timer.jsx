// import "./styles.css";
import React, { useState, useEffect, Fragment } from "react";
// import { Link } from "react-router-dom";
const START_MINUTES = "05";
const START_SECOND = "00";
const START_DERATION = 5;

const Timer = () => {
  const [currentMinutes, setMinutes] = useState(START_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECOND);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DERATION);
  const [isRunning, setIsRunning] = useState(false);

  const startHandler = () => {
    setDuration(parseInt(START_SECOND, 10) + 60 * parseInt(START_MINUTES, 10));
    // setMinutes(60 * 5);
    // setSeconds(0);
    setIsRunning(true);
  };
  const stopHandler = () => {
    // stop timer
    setIsStop(true);
    setIsRunning(false);
  };
  const resetHandler = () => {
    setMinutes(START_MINUTES);
    setSeconds(START_SECOND);
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DERATION);
  };

  const resumeHandler = () => {
    let newDuration =
      parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);

    setIsRunning(true);
    setIsStop(false);
  };

  useEffect(() => {
    if (isRunning === true) {
      let timer = duration;
      var minutes, seconds;
      const interval = setInterval(function () {
        if (--timer <= 0) {
          resetHandler();
        } else {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <Fragment>
      <div className="Timer">
        {/* <button>Timer</button> */}
        <h2 className="Time">
          {currentMinutes}m<span className="mx-3">:</span>
          {currentSeconds}s
        </h2>
        <div className="btnDiv">
        <div className="btnbox">
          {!isRunning && !isStop && (
            <button
              onClick={startHandler}
              className="btn1"
            >
              START
            </button>
          )}
          {isRunning && (
            <button
              onClick={stopHandler}
              className="btn1"
            >
              STOP
            </button>
          )}

          {isStop && (
            <button
              onClick={resumeHandler}
              className="btn1"
            >
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
    </Fragment>
  );
};

export default Timer;
