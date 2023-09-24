import styled from "styled-components"

const RollDice = ({roleDice, currentDice}) => {
    
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/Images/Dice/dice_${currentDice}.jpg`} alt="dice 1" />
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