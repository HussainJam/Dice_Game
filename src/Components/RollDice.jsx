import { useState } from "react";
import styled from "styled-components"

const RollDice = () => {
  const [currentDice, setCurrentdice] = useState();
  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  };



  return (
    <DiceContainer>
      <div className="dice" onClick={() => generateRandomNumber(1, 7)}>
        <img src="/Images/Dice/dice_1.jpg" alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div `
 margin-top: 48px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 p {
  font-size: 24px;
 }

 .dice {
  cursor: pointer;
 }
`;