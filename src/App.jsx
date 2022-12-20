import React, { useContext } from "react";
import Board from "./Component/Board";
import { BlueDice, GreenDice, RedDice, YellowDice } from "./Component/Dice";
import { GlobalContext } from "./Context/LudoContext";

const App = () => {
  const { Bluechange, bluedicenumber, BlueDiceValues, greendicenumber } =
    useContext(GlobalContext);
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Ludo Game</h1>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
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
        <GreenDice />
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
    </div>
  );
};

export default App;
