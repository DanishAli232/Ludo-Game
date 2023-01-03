import React, { useContext } from "react";
import Board from "./Component/Board";
import {
  BlueDice,
  ComputerGreenDice,
  GreenDice,
  RedDice,
  YellowDice,
} from "./Component/Dice";
import HomePage from "./Component/HomePage";
import { GlobalContext } from "./Context/LudoContext";

const App = () => {
  const {
    Bluechange,
    bluedicenumber,
    BlueDiceValues,
    greendicenumber,
    HumanClicker,
    ComputerClicker,
    displayludo,
    displayopp,
  } = useContext(GlobalContext);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Ludo Game</h1>
      <div
        style={{
          display: displayopp,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>Select Your Opponent</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button style={{ cursor: "pointer" }} onClick={HumanClicker}>
            Human
          </button>
          <button style={{ cursor: "pointer" }} onClick={ComputerClicker}>
            Computer
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: displayludo,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            position: "absolute",
            top: "91px",
            right: "340px",
            color: "red",
          }}
        >
          {greendicenumber.message}
        </p>
        <Board />
        <RedDice />
        {greendicenumber.computerPlay === true ? (
          <ComputerGreenDice />
        ) : (
          <GreenDice />
        )}

        <YellowDice />
        <BlueDice />
        <p
          style={{
            position: "absolute",
            top: "551px",
            left: "335px",
            color: "red",
          }}
        >
          {bluedicenumber.message}
        </p>
      </div>
      {/* <Route path='/stores' element={<HomePage />} /> */}
    </div>
  );
};

export default App;
