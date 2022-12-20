import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/LudoContext";
import { SwitchNumber } from "../utils/SwitchNumber";

export const RedDice = () => {
  const [dicenumber, setnumber] = useState(1);
  const DiceValues = {
    number: 1,
  };
  const change = () => {
    DiceValues.number = Math.floor(Math.random() * 6) + 1;
    setnumber(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <div
        onClick={change}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          borderRadius: "10px",
          position: "relative",
          cursor: "pointer",
          left: "-175px",
          top: "-453px",
        }}
      >
        {dicenumber === 0
          ? SwitchNumber(DiceValues.number)
          : SwitchNumber(dicenumber)}
      </div>
    </div>
  );
};

export const YellowDice = () => {
  const [dicenumber, setnumber] = useState(1);
  const DiceValues = {
    number: 1,
  };
  const change = () => {
    DiceValues.number = Math.floor(Math.random() * 6) + 1;
    setnumber(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <div
        onClick={change}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#dfd408",
          borderRadius: "10px",
          position: "relative",
          cursor: "pointer",
          top: "-99px",
          left: "177px",
        }}
      >
        {dicenumber === 0
          ? SwitchNumber(DiceValues.number)
          : SwitchNumber(dicenumber)}
      </div>
    </div>
  );
};

export const BlueDice = () => {
  const { Bluechange, bluedicenumber, BlueDiceValues } =
    useContext(GlobalContext);

  return (
    <div>
      <div
        onClick={Bluechange}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "blue",
          borderRadius: "10px",
          position: "relative",
          cursor: "pointer",
          top: "-149px",
          left: "-177px",
        }}
      >
        {bluedicenumber.number === 0
          ? SwitchNumber(BlueDiceValues.number)
          : SwitchNumber(bluedicenumber.number)}
      </div>
    </div>
  );
};

export const GreenDice = () => {
  const { greendicenumber, Greenchange } = useContext(GlobalContext);

  return (
    <div>
      <div
        onClick={Greenchange}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "green",
          borderRadius: "10px",
          position: "relative",
          cursor: "pointer",
          top: "-503px",
          left: "176px",
        }}
      >
        {greendicenumber.number === 0
          ? SwitchNumber(greendicenumber.number)
          : SwitchNumber(greendicenumber.number)}
      </div>
    </div>
  );
};
