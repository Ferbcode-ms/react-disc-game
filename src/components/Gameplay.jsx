import React, { useState } from "react";
import Totalscore from "./Totalscore";
import Numberselector from "./Numberselector";
import styled from "styled-components";
import Roledisc from "./Roledisc";
const Gameplay = () => {
  const [Score, setScore] = useState(0);
  const [Num, setNum] = useState(1);
  const [Selnum, setSelnum] = useState();
  const [Error, setError] = useState("");

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    if (!Selnum) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    setNum(randomNumberInRange(1, 6));
    if (Num == Selnum) {
      setScore((prev) => prev + Num);
    } else {
      setScore((prev) => prev - Num);
    }

    setSelnum(undefined);
  };

const reset =()=>{
  setScore(0);
}


  return (
    <div>
      <Main>
        <Totalscore Score={Score} />
        <Numberselector Selnum={Selnum} setSelnum={setSelnum} Error={Error} />
      </Main>
      <Roledisc Num={Num} handleClick={handleClick} />
      <Btns>
        <button onClick={reset}>Reset Score</button>
       
      <div className="back">
        <h3>How to play dice game</h3>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
      </Btns>
    </div>
  );
};

export default Gameplay;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 152px;
  margin-top: 70px;
  width: 1280px;
`;
const Btns = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: 15px auto;
  .back{
    background-color: #cec6c6;padding:40px;
  }
  button {
    all: unset;
    background-color: black;
    color: white;
    width: 220px;
    border-radius: 15px;
    height: 44px;
    text-align: center;
  }
`;


