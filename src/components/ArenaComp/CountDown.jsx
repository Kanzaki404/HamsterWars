import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const TimerStyle = styled.div`
  h1 {
    font-size: 250px;
    color: aliceblue;

    animation: fighttext 1s ease-in-out infinite;
    /* animation-delay: -0.4s; */

    @keyframes fighttext {
      0% {
        opacity: 0;
        transform: scale(3);
      }
      5% {
        opacity: 1;
        transform: scale(3);
      }
      50% {
      }
      80% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(1);
      }
    }
  }

  /* h1 span {
    font-family: fantasy;
  } */
`;

const CountDown = () => {
  const [seconds, setSeconds] = useState(3);
  const [isActive, setIsActive] = useState(true);
  const [fight, setfight] = useState(true);

  useEffect(() => {
    setfight(true);
    let interval = null;
    if (seconds > 0) {
      if (isActive) {
        interval = setInterval(() => {
          setSeconds((seconds) => seconds - 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
    setIsActive(false);
    setSeconds('');
    if (fight) {
      return setfight('Fight!');
    }
  }, [isActive, seconds]);

  return (
    <TimerStyle className="time">
      <h1>
        {seconds}
        {fight}
      </h1>
    </TimerStyle>
  );
};

export default CountDown;
