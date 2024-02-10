import React from "react";
import styled from "styled-components";

const Roledisc = ({Num,handleClick}) => {

 

  return (
    <Discon>
      <div>
        <img onClick={handleClick} src={`/img/dice_${Num}.png`} alt="" />
      </div>

      <p >Click on Dice to roll</p>
    </Discon>
  );
};

export default Roledisc;

const Discon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  flex-direction: column;

  p {
    font-size: 24px;
  }
`;
