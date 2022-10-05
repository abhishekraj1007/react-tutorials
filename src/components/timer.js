import React, { useState, useEffect } from "react";

let counterId;

function Timer() {
  const [count, setCount] = useState(0);
  const [isRun, setIsRun] = useState(true);

  const startCounter = () => {
    setIsRun(true);
  };

  const resetCounter = () => {
    if (counterId) {
      clearInterval(counterId);
      setCount(0);
      setIsRun(false);
    }
  };

  const pauseCounter = () => {
    if (counterId) {
      clearInterval(counterId);
      setIsRun(false);
    }
  };

  useEffect(() => {
    if (isRun) {
      counterId = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }

    return () => {
        clearInterval(counterId);
    }
  }, [count, isRun]);

  return (
    <>
      <div>
        <h1>This is my project</h1>
        <h2 style={{ color: "blue" }}>Timer : {count}</h2>
      </div>
      <div>
        <button onClick={startCounter}>Start</button>
        <button onClick={resetCounter}>Reset</button>
        <button onClick={pauseCounter}>Pause</button>
      </div>
    </>
  );
}

export default Timer;
