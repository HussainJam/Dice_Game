import styled from "styled-components";


const StartGame = () => {
  return (
    <container>
        <img src="/Images/dices.png" alt="" />
        <div>
            <h1>
                DICE GAME
            </h1>
            <Button>Play Now</Button>
        </div>
    </container>
  )
}

export default StartGame;


const container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
`;
const Button = styled.button`
    padding: 10px 18px;
    color: white;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
`;