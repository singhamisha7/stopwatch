import React, { useState, useEffect } from "react";
import "./App.css";

const StopwatchApp = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const startStopwatch = () => {
    setRunning(true);
  };

  const stopStopwatch = () => {
    setRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, "0")} : ${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div className="stopwatch-display">{formatTime(time)}</div>
      <div className="stopwatch-buttons">
        <button onClick={stopStopwatch}>Pause</button>
        <button onClick={startStopwatch}>Start</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default StopwatchApp;
