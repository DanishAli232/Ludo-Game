import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

export const GlobalContext = React.createContext();
import { position } from "../positions";
import { AllPositions } from "../Allpositions";
import { countvalue } from "../count";

export const LudoContext = ({ children }) => {
  let number1 = Math.floor(Math.random() * 6) + 1;
  const [bluedicenumber, setblue] = useState({
    number: 1,
    count: 0,
    positionNo: 0,
    positionOut: false,
    positionOut1: false,
    positionOut2: false,
    positionOut3: false,
    count1: 0,
    positionNo1: 57,
    count2: 0,
    positionNo2: 58,
    count3: 0,
    positionNo3: 59,
    totalsix: 4,
    six: 0,
    value: 0,
    Noout: false,
    turn: true,
    message: "",
  });

  const [greendicenumber, setgreen] = useState({
    number: 1,
    count: 0,
    positionNo: 0,
    positionOut: false,
    positionOut1: false,
    positionOut2: false,
    positionOut3: false,
    count1: 0,
    positionNo1: 1,
    count2: 0,
    positionNo2: 2,
    count3: 0,
    positionNo3: 3,
    totalsix: 4,
    six: 0,
    value: 0,
    Noout: false,
    turn: false,
    message: "",
  });

  const BlueDiceValues = {
    number: 1,
  };

  const Bluechange = () => {
    if (bluedicenumber.turn === true) {
      if (bluedicenumber.value > 0) {
        console.log("First You move your Token");
        setblue({ ...bluedicenumber, message: "First You Move" });
      } else if (bluedicenumber.Noout === false) {
        setblue({
          ...bluedicenumber,
          number: number1,
          value: 0,
          turn: false,
          message: "",
        });
        setgreen({ ...greendicenumber, turn: true });
      } else if (number1 !== 6) {
        console.log(bluedicenumber);
        console.log("okkkk");
        setblue({
          ...bluedicenumber,
          number: number1,
          value: number1,
          turn: false,
          message: "",
        });
        setgreen({ ...greendicenumber, turn: true });
      } else {
        console.log("blue Error");
      }
    } else {
      setblue({ ...bluedicenumber, message: "Not Your Turn" });
      console.log("Not Your Turn");
    }
    if (number1 === 6 && bluedicenumber.totalsix >= 1) {
      console.log("yes");
      setblue({
        ...bluedicenumber,
        number: number1,
        six: bluedicenumber.six + 1,
        totalsix: bluedicenumber.totalsix - 1,
        value: 6,
        Noout: true,
        message: "",
      });
      // setgreen({ ...greendicenumber, turn: true });
    }
  };

  useEffect(() => {
    console.log(greendicenumber);
    console.log(bluedicenumber);
    console.log(number1);
  }, [greendicenumber, number1]);

  const BlueChangeposition = (value) => {
    console.log(number1);
    console.log("yes");

    if (
      value === 0 &&
      bluedicenumber.six > 0 &&
      bluedicenumber.positionOut === false
    ) {
      setblue({
        ...bluedicenumber,
        six: 0,
        positionNo: 1,
        positionOut: true,
        value: 0,
      });
    } else if (
      value === 0 &&
      bluedicenumber.positionOut &&
      bluedicenumber.value > 0
    ) {
      countvalue.map(({ count }, index) => {
        if (bluedicenumber.count + bluedicenumber.number === count) {
          console.log(bluedicenumber.count + bluedicenumber.number);
          setblue({
            ...bluedicenumber,
            positionNo: count + 1,
            count: bluedicenumber.number + bluedicenumber.count,
            value: 0,
          });
        }
      });
    }

    if (
      value === 1 &&
      bluedicenumber.six > 0 &&
      bluedicenumber.positionOut1 === false
    ) {
      setblue({
        ...bluedicenumber,
        six: 0,
        positionNo1: 1,
        positionOut1: true,
        value: 0,
      });
    } else if (
      value === 1 &&
      bluedicenumber.positionOut1 &&
      bluedicenumber.value > 0
    ) {
      countvalue.map(({ count }, index) => {
        if (bluedicenumber.count1 + bluedicenumber.number === count) {
          console.log(bluedicenumber.count1 + bluedicenumber.number);
          setblue({
            ...bluedicenumber,
            positionNo1: count + 1,
            count1: bluedicenumber.number + bluedicenumber.count1,
            value: 0,
          });
        }
      });
    }

    if (
      value === 2 &&
      bluedicenumber.six > 0 &&
      bluedicenumber.positionOut2 === false
    ) {
      setblue({
        ...bluedicenumber,
        six: 0,
        positionNo2: 1,
        positionOut2: true,
        value: 0,
      });
    } else if (
      value === 2 &&
      bluedicenumber.positionOut2 &&
      bluedicenumber.value > 0
    ) {
      countvalue.map(({ count }, index) => {
        if (bluedicenumber.count2 + bluedicenumber.number === count) {
          console.log(bluedicenumber.count2 + bluedicenumber.number);
          setblue({
            ...bluedicenumber,
            positionNo2: count + 1,
            count2: bluedicenumber.number + bluedicenumber.count2,
            value: 0,
          });
        }
      });
    }

    if (
      value === 3 &&
      bluedicenumber.six > 0 &&
      bluedicenumber.positionOut3 === false
    ) {
      setblue({
        ...bluedicenumber,
        six: 0,
        positionNo3: 1,
        positionOut3: true,
        value: 0,
      });
    } else if (
      value === 3 &&
      bluedicenumber.positionOut3 &&
      bluedicenumber.value > 0
    ) {
      countvalue.map(({ count }, index) => {
        if (bluedicenumber.count3 + bluedicenumber.number === count) {
          console.log(bluedicenumber.count3 + bluedicenumber.number);
          setblue({
            ...bluedicenumber,
            positionNo3: count + 1,
            count3: bluedicenumber.number + bluedicenumber.count3,
            value: 0,
          });
        }
      });
    }
  };

  const Greenchange = () => {
    if (greendicenumber.turn === true) {
      if (greendicenumber.value > 0) {
        console.log("First You Move your Token");
        setgreen({ ...greendicenumber, message: "First You Move" });
      } else if (greendicenumber.Noout === false) {
        setgreen({
          ...greendicenumber,
          number: number1,
          value: 0,
          turn: false,
          message: "",
        });
        setblue({ ...bluedicenumber, turn: true });
      } else if (number1 !== 6) {
        console.log("OKGREEN");
        setgreen({
          ...greendicenumber,
          number: number1,
          value: number1,
          turn: false,
          message: "",
        });
        setblue({ ...bluedicenumber, turn: true });
      } else {
        console.log("Green Error");
      }
    } else {
      setgreen({ ...greendicenumber, message: "Not Your Turn" });
      console.log("Not Your Turn");
    }
    if (number1 === 6 && greendicenumber.totalsix >= 1) {
      console.log("yes");
      setgreen({
        ...greendicenumber,
        number: number1,
        six: greendicenumber.six + 1,
        totalsix: greendicenumber.totalsix - 1,
        value: 6,
        Noout: true,
        message: "",
        // turn: false,
      });
      // setblue({ ...bluedicenumber, turn: true });
    }
  };

  const GreenChangeposition = (value) => {
    console.log(value);

    if (
      value === 0 &&
      greendicenumber.six > 0 &&
      greendicenumber.positionOut === false
    ) {
      console.log("ok");
      setgreen({
        ...greendicenumber,
        six: 0,
        positionNo: 4,
        positionOut: true,
        value: 0,
      });
    } else if (
      value === 0 &&
      greendicenumber.positionOut &&
      greendicenumber.value > 0
    ) {
      countvalue.map(({ count }, index) => {
        if (greendicenumber.count + greendicenumber.number === count) {
          console.log(greendicenumber.count + greendicenumber.number);
          setgreen({
            ...greendicenumber,
            positionNo: count + 4,
            count: greendicenumber.number + greendicenumber.count,
            value: 0,
          });
        }
      });
    }

    if (
      value === 1 &&
      greendicenumber.six > 0 &&
      greendicenumber.positionOut1 === false
    ) {
      setgreen({
        ...greendicenumber,
        six: 0,
        positionNo1: 4,
        positionOut1: true,
        value: 0,
      });
    } else if (
      value === 1 &&
      greendicenumber.positionOut1 &&
      greendicenumber.value > 0
    ) {
      countvalue.map(({ count }, index) => {
        if (greendicenumber.count1 + greendicenumber.number === count) {
          console.log(greendicenumber.count1 + greendicenumber.number);
          setgreen({
            ...greendicenumber,
            positionNo1: count + 4,
            count1: greendicenumber.number + greendicenumber.count1,
            value: 0,
          });
        }
      });
    }

    if (
      value === 2 &&
      greendicenumber.six > 0 &&
      greendicenumber.positionOut2 === false
    ) {
      setgreen({
        ...greendicenumber,
        six: 0,
        positionNo2: 4,
        positionOut2: true,
        value: 0,
      });
    } else if (
      value === 2 &&
      greendicenumber.positionOut2 &&
      greendicenumber.value > 0
    ) {
      countvalue.map(({ count }, index) => {
        if (greendicenumber.count2 + greendicenumber.number === count) {
          console.log(greendicenumber.count2 + greendicenumber.number);
          setgreen({
            ...greendicenumber,
            positionNo2: count + 4,
            count2: greendicenumber.number + greendicenumber.count2,
            value: 0,
          });
        }
      });
    }

    if (
      value === 3 &&
      greendicenumber.six > 0 &&
      greendicenumber.positionOut3 === false
    ) {
      setgreen({
        ...greendicenumber,
        six: 0,
        positionNo3: 4,
        positionOut3: true,
        value: 0,
      });
    } else if (
      value === 3 &&
      greendicenumber.positionOut3 &&
      greendicenumber.value > 0
    ) {
      countvalue.map(({ count }, index) => {
        if (greendicenumber.count3 + greendicenumber.number === count) {
          console.log(greendicenumber.count3 + greendicenumber.number);
          setgreen({
            ...greendicenumber,
            positionNo3: count + 4,
            count3: greendicenumber.number + greendicenumber.count3,
            value: 0,
          });
        }
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        Bluechange,
        bluedicenumber,
        BlueDiceValues,
        number1,
        BlueChangeposition,
        GreenChangeposition,
        Greenchange,
        greendicenumber,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// export const useGlobalContext = () => useContext(GlobalContext);
