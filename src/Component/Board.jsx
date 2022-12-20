import React from "react";
import { BlueToken, GreenToken, RedToken, YellowToken } from "./Token";
import { position } from "../positions";
import { useContext } from "react";
import { GlobalContext } from "../Context/LudoContext";
import { AllPositions } from "../Allpositions";
// import { useGlobalContext } from "../Context/LudoContext";
const Board = () => {
  // console.log(demo);
  const {
    bluedicenumber,
    BlueChangeposition,
    GreenChangeposition,
    greendicenumber,
  } = useContext(GlobalContext);

  return (
    <div
      style={{
        border: "1px solid black",
        width: "400px",
        height: "400px",
        backgroundImage: `url("./ludoboard.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        marginTop: "64px",
      }}
    >
      <div
        onClick={() => GreenChangeposition(0)}
        style={{
          position: "absolute",
          top: `${AllPositions[0].green[greendicenumber.positionNo].top}px`,
          left: `${AllPositions[0].green[greendicenumber.positionNo].left}px`,
        }}
      >
        <GreenToken />
      </div>
      <div
        onClick={() => GreenChangeposition(1)}
        style={{
          position: "absolute",
          top: `${AllPositions[0].green[greendicenumber.positionNo1].top}px`,
          left: `${AllPositions[0].green[greendicenumber.positionNo1].left}px`,
        }}
      >
        <GreenToken />
      </div>
      <div
        onClick={() => GreenChangeposition(2)}
        style={{
          position: "absolute",
          top: `${AllPositions[0].green[greendicenumber.positionNo2].top}px`,
          left: `${AllPositions[0].green[greendicenumber.positionNo2].left}px`,
        }}
      >
        <GreenToken />
      </div>
      <div
        onClick={() => GreenChangeposition(3)}
        style={{
          position: "absolute",
          top: `${AllPositions[0].green[greendicenumber.positionNo3].top}px`,
          left: `${AllPositions[0].green[greendicenumber.positionNo3].left}px`,
        }}
      >
        <GreenToken />
      </div>
      <div style={{ position: "absolute", top: "28px", left: "44px" }}>
        <RedToken />
      </div>
      <div style={{ position: "absolute", top: "28px", left: "97px" }}>
        <RedToken />
      </div>
      <div style={{ position: "absolute", top: "81px", left: "44px" }}>
        <RedToken />
      </div>
      <div style={{ position: "absolute", top: "81px", left: "97px" }}>
        <RedToken />
      </div>
      <div style={{ position: "absolute", top: "319px", left: "335px" }}>
        <YellowToken />
      </div>
      <div style={{ position: "absolute", top: "319px", left: "282px" }}>
        <YellowToken />
      </div>
      <div style={{ position: "absolute", top: "266px", left: "335px" }}>
        <YellowToken />
      </div>
      <div style={{ position: "absolute", top: "266px", left: "282px" }}>
        <YellowToken />
      </div>
      <div
        onClick={() => BlueChangeposition(0)}
        style={{
          position: "absolute",
          top: `${AllPositions[0].blue[bluedicenumber.positionNo].top}px`,
          left: `${AllPositions[0].blue[bluedicenumber.positionNo].left}px`,
        }}
      >
        <BlueToken />
      </div>
      <div
        onClick={() => BlueChangeposition(1)}
        style={{
          position: "absolute",
          top: `${AllPositions[0].blue[bluedicenumber.positionNo1].top}px`,
          left: `${AllPositions[0].blue[bluedicenumber.positionNo1].left}px`,
        }}
      >
        <BlueToken />
      </div>{" "}
      <div
        onClick={() => BlueChangeposition(2)}
        style={{
          position: "absolute",
          top: `${AllPositions[0].blue[bluedicenumber.positionNo2].top}px`,
          left: `${AllPositions[0].blue[bluedicenumber.positionNo2].left}px`,
        }}
      >
        <BlueToken />
      </div>
      <div
        onClick={() => BlueChangeposition(3)}
        style={{
          position: "absolute",
          top: `${AllPositions[0].blue[bluedicenumber.positionNo3].top}px`,
          left: `${AllPositions[0].blue[bluedicenumber.positionNo3].left}px`,
        }}
      >
        <BlueToken />
      </div>
    </div>
  );
};

export default Board;
