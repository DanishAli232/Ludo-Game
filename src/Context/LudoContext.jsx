import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

export const GlobalContext = React.createContext();
import { position } from "../positions";
import { AllPositions } from "../Allpositions";
import { countvalue } from "../count";
import { RemoveToken } from "../Component/RemoveToken";

export const LudoContext = ({ children }) => {
  let obj = {};
  // let number1 = Math.floor(Math.random() * 6) + 1;
  const [vall, setvall] = useState(1);
  const [displayludo, setdisplayludo] = useState("none");
  const [displayopp, setdisplayopp] = useState("flex");

  const [bluedicenumber, setblue] = useState({
    number: 1,
    count: 0,
    positionNo: 0,
    positionOut: false,
    positionOut1: false,
    positionOut2: false,
    positionOut3: false,
    count1: 0,
    positionNo1: 58,
    count2: 0,
    positionNo2: 59,
    count3: 0,
    positionNo3: 60,
    totalsix: 4,
    six: 0,
    value: 0,
    Noout: false,
    turn: true,
    message: "Your Turn",
    computerPlay: false,
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
    computerPlay: false,
  });

  const BlueDiceValues = {
    number: 1,
  };

  const computerPlay = () => {
    // console.log("computer play");
    // let number1;
    // number1 = Math.floor(Math.random() * 6) + 1;
    // if (greendicenumber.Noout === false) {
    //   setgreen({
    //     ...greendicenumber,
    //     number: number1,
    //     value: 0,
    //     turn: false,
    //     message: "",
    //   });
    //   setblue({ ...bluedicenumber, turn: true });
    // } else if (number1 !== 6) {
    //   setgreen({
    //     ...greendicenumber,
    //     number: number1,
    //     value: number1,
    //     turn: false,
    //     message: "",
    //   });
    // } else {
    //   console.log("Green Error");
    // }
    // if (number1 === 6) {
    //   console.log("yes");
    //   setgreen({
    //     ...greendicenumber,
    //     number: number1,
    //     six: greendicenumber.six + 1,
    //     totalsix: greendicenumber.totalsix - 1,
    //     value: 6,
    //     Noout: true,
    //     message: "",
    //     turn: true,
    //   });
    //   setblue({ ...bluedicenumber, turn: false });
    // }
    // // } else {
    // //   setgreen({ ...greendicenumber, message: "Not Your Turn" });
    // //   console.log("Not Your Turn");
    // // }
    // if (greendicenumber.turn === true) {
    // }
  };

  const Bluechange = () => {
    setgreen({ ...greendicenumber, message: "" });

    let number1;
    if (bluedicenumber.turn === true) {
      number1 = Math.floor(Math.random() * 6) + 1;
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

        if (greendicenumber.computerPlay) {
          computerPlay();
        }
        setgreen({ ...greendicenumber, turn: true });
      } else if (number1 !== 6) {
        setblue({
          ...bluedicenumber,
          number: number1,
          value: number1,
          turn: false,
          message: "",
        });
      } else {
        console.log("blue Error");
      }

      if (number1 === 6) {
        setblue({
          ...bluedicenumber,
          number: number1,
          six: bluedicenumber.six + 1,
          totalsix: bluedicenumber.totalsix - 1,
          value: 6,
          Noout: true,
          message: "",
          turn: true,
        });
        setgreen({ ...greendicenumber, turn: false });
      }
    } else {
      setblue({ ...bluedicenumber, message: "Not Your Turn" });
      console.log("Not Your Turn");
    }
  };

  const BlueChangeposition = (value) => {
    console.log("yes");
    let greenposition1;
    let greenposition2;
    let greenposition3;
    let greenposition4;
    if (
      value === 0 &&
      bluedicenumber.value === 6 &&
      bluedicenumber.positionOut === false
    ) {
      setblue({
        ...bluedicenumber,
        six: 0,
        positionNo: 1,
        positionOut: true,
        value: 0,
        turn: true,
      });
      setgreen({ ...greendicenumber, turn: false });
    } else if (
      value === 0 &&
      bluedicenumber.positionOut &&
      bluedicenumber.value > 0
    ) {
      if (bluedicenumber.value === 6) {
        setgreen({ ...greendicenumber, turn: false });
        countvalue.map(({ count }, index) => {
          if (bluedicenumber.count + bluedicenumber.number === count) {
            console.log(bluedicenumber.count + bluedicenumber.number);
            greenposition1 = count + 4;
            greenposition2 = bluedicenumber.positionNo1;
            greenposition3 = bluedicenumber.positionNo2;
            greenposition4 = bluedicenumber.positionNo3;
            setblue({
              ...bluedicenumber,
              positionNo: count + 1,
              count: bluedicenumber.number + bluedicenumber.count,
              value: 0,
              turn: true,
            });
          }
        });
      } else {
        setgreen({ ...greendicenumber, turn: true });

        countvalue.map(({ count }, index) => {
          if (bluedicenumber.count + bluedicenumber.number === count) {
            console.log(bluedicenumber.count + bluedicenumber.number);
            greenposition1 = count + 4;
            greenposition2 = bluedicenumber.positionNo1;
            greenposition3 = bluedicenumber.positionNo2;
            greenposition4 = bluedicenumber.positionNo3;
            setblue({
              ...bluedicenumber,
              positionNo: count + 1,
              count: bluedicenumber.number + bluedicenumber.count,
              value: 0,
              turn: false,
            });
          }
        });
        if (greendicenumber.computerPlay) {
          computerPlay();
        }
        console.log("ok 0");
      }
    }

    if (
      value === 1 &&
      bluedicenumber.value === 6 &&
      bluedicenumber.positionOut1 === false
    ) {
      setblue({
        ...bluedicenumber,
        six: 0,
        positionNo1: 1,
        positionOut1: true,
        value: 0,
        turn: true,
      });
      setgreen({ ...greendicenumber, turn: false });
    } else if (
      value === 1 &&
      bluedicenumber.positionOut1 &&
      bluedicenumber.value > 0
    ) {
      if (bluedicenumber.value === 6) {
        setgreen({ ...greendicenumber, turn: false });
        countvalue.map(({ count }, index) => {
          if (bluedicenumber.count1 + bluedicenumber.number === count) {
            console.log(bluedicenumber.count1 + bluedicenumber.number);
            greenposition1 = count + 4;
            greenposition2 = bluedicenumber.positionNo1;
            greenposition3 = bluedicenumber.positionNo2;
            greenposition4 = bluedicenumber.positionNo3;
            setblue({
              ...bluedicenumber,
              positionNo1: count + 1,
              count1: bluedicenumber.number + bluedicenumber.count1,
              value: 0,
              turn: true,
            });
          }
        });
      } else {
        setgreen({ ...greendicenumber, turn: true });

        countvalue.map(({ count }, index) => {
          if (bluedicenumber.count1 + bluedicenumber.number === count) {
            console.log(bluedicenumber.count1 + bluedicenumber.number);
            greenposition1 = count + 4;
            greenposition2 = bluedicenumber.positionNo1;
            greenposition3 = bluedicenumber.positionNo2;
            greenposition4 = bluedicenumber.positionNo3;
            setblue({
              ...bluedicenumber,
              positionNo1: count + 1,
              count1: bluedicenumber.number + bluedicenumber.count1,
              value: 0,
              turn: false,
            });
          }
        });
        if (greendicenumber.computerPlay) {
          computerPlay();
        }
        console.log("ok 0");
      }
    }

    if (
      value === 2 &&
      bluedicenumber.value === 6 &&
      bluedicenumber.positionOut2 === false
    ) {
      setblue({
        ...bluedicenumber,
        six: 0,
        positionNo2: 1,
        positionOut2: true,
        value: 0,
        turn: true,
      });
      setgreen({ ...greendicenumber, turn: false });
    } else if (
      value === 2 &&
      bluedicenumber.positionOut2 &&
      bluedicenumber.value > 0
    ) {
      if (bluedicenumber.value === 6) {
        setgreen({ ...greendicenumber, turn: false });
        countvalue.map(({ count }, index) => {
          if (bluedicenumber.count2 + bluedicenumber.number === count) {
            console.log(bluedicenumber.count2 + bluedicenumber.number);
            greenposition1 = count + 4;
            greenposition2 = bluedicenumber.positionNo2;
            greenposition3 = bluedicenumber.positionNo2;
            greenposition4 = bluedicenumber.positionNo3;
            setblue({
              ...bluedicenumber,
              positionNo2: count + 1,
              count2: bluedicenumber.number + bluedicenumber.count2,
              value: 0,
              turn: true,
            });
          }
        });
      } else {
        setgreen({ ...greendicenumber, turn: true });

        countvalue.map(({ count }, index) => {
          if (bluedicenumber.count2 + bluedicenumber.number === count) {
            console.log(bluedicenumber.count2 + bluedicenumber.number);
            greenposition1 = count + 4;
            greenposition2 = bluedicenumber.positionNo2;
            greenposition3 = bluedicenumber.positionNo2;
            greenposition4 = bluedicenumber.positionNo3;
            setblue({
              ...bluedicenumber,
              positionNo2: count + 1,
              count2: bluedicenumber.number + bluedicenumber.count2,
              value: 0,
              turn: false,
            });
          }
        });
        if (greendicenumber.computerPlay) {
          computerPlay();
        }
        console.log("ok 0");
      }
    }

    if (
      value === 3 &&
      greendicenumber.value === 6 &&
      greendicenumber.positionOut3 === false
    ) {
      setgreen({
        ...greendicenumber,
        six: 0,
        positionNo3: 1,
        positionOut3: true,
        value: 0,
        turn: true,
      });
      setblue({ ...bluedicenumber, turn: false });
    } else if (
      value === 3 &&
      greendicenumber.positionOut3 &&
      greendicenumber.value > 0
    ) {
      if (greendicenumber.value === 6) {
        console.log("okkkk0");

        setblue({ ...bluedicenumber, turn: false });
        countvalue.map(({ count }, index) => {
          if (greendicenumber.count3 + greendicenumber.number === count) {
            greenposition1 = greendicenumber.positionNo3;
            greenposition2 = greendicenumber.positionNo1;
            greenposition3 = count + 4;
            greenposition4 = greendicenumber.positionNo3;
            setgreen({
              ...greendicenumber,
              positionNo3: count + 1,
              count3: greendicenumber.number + greendicenumber.count3,
              value: 0,
              turn: true,
            });
          }
        });
      } else {
        setblue({ ...bluedicenumber, turn: true });
        console.log("okkkk1");
        countvalue.map(({ count }, index) => {
          if (greendicenumber.count3 + greendicenumber.number === count) {
            greenposition1 = greendicenumber.positionNo;
            greenposition2 = greendicenumber.positionNo1;
            greenposition3 = count + 4;
            greenposition4 = greendicenumber.positionNo3;
            setgreen({
              ...greendicenumber,
              positionNo3: count + 1,
              count3: greendicenumber.number + greendicenumber.count3,
              value: 0,
              turn: false,
            });
          }
        });
        if (greendicenumber.computerPlay) {
          computerPlay();
        }
        console.log("ok 3");
      }
    }
  };

  const Greenchange = () => {
    setblue({ ...bluedicenumber, message: "" });

    if (greendicenumber.computerPlay === false) {
      let number1;
      if (greendicenumber.turn === true) {
        number1 = Math.floor(Math.random() * 6) + 1;
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
          setgreen({
            ...greendicenumber,
            number: number1,
            value: number1,
            turn: false,
            message: "",
          });
        } else {
          console.log("Green Error");
        }

        if (number1 === 6) {
          console.log("yes");
          setgreen({
            ...greendicenumber,
            number: number1,
            six: greendicenumber.six + 1,
            totalsix: greendicenumber.totalsix - 1,
            value: 6,
            Noout: true,
            message: "",
            turn: true,
          });
          setblue({ ...bluedicenumber, turn: false });
        }
      } else {
        setgreen({ ...greendicenumber, message: "Not Your Turn" });
        console.log("Not Your Turn");
      }
    }
  };

  const GreenChangeposition = (value) => {
    let blueposition1 = bluedicenumber.positionNo;
    let blueposition2 = bluedicenumber.positionNo1;
    let blueposition3 = bluedicenumber.positionNo2;
    let blueposition4 = bluedicenumber.positionNo3;
    const bluenewposition = [
      blueposition1,
      blueposition2,
      blueposition3,
      blueposition4,
    ];
    console.log(value);
    let greenposition1;
    let greenposition2;
    let greenposition3;
    let greenposition4;

    if (
      value === 0 &&
      greendicenumber.value === 6 &&
      greendicenumber.positionOut === false
    ) {
      setgreen({
        ...greendicenumber,
        six: 0,
        positionNo: 4,
        positionOut: true,
        value: 0,
        turn: true,
      });
      setblue({ ...bluedicenumber, turn: false });
    } else if (
      value === 0 &&
      greendicenumber.positionOut &&
      greendicenumber.value > 0
    ) {
      if (greendicenumber.value === 6) {
        setblue({ ...bluedicenumber, turn: false });
        countvalue.map(({ count }, index) => {
          if (greendicenumber.count + greendicenumber.number === count) {
            console.log(greendicenumber.count + greendicenumber.number);
            greenposition1 = count + 4;
            greenposition2 = greendicenumber.positionNo1;
            greenposition3 = greendicenumber.positionNo2;
            greenposition4 = greendicenumber.positionNo3;
            setgreen({
              ...greendicenumber,
              positionNo: count + 4,
              count: greendicenumber.number + greendicenumber.count,
              value: 0,
              turn: true,
            });
          }
        });
        // const greennewposition = [
        //   greenposition1,
        //   greenposition2,
        //   greenposition3,
        //   greenposition4,
        // ];
        // RemoveToken(greennewposition, bluenewposition, setblue, bluedicenumber);
      } else {
        setblue({ ...bluedicenumber, turn: true });

        countvalue.map(({ count }, index) => {
          if (greendicenumber.count + greendicenumber.number === count) {
            console.log(greendicenumber.count + greendicenumber.number);
            greenposition1 = count + 4;
            greenposition2 = greendicenumber.positionNo1;
            greenposition3 = greendicenumber.positionNo2;
            greenposition4 = greendicenumber.positionNo3;
            setgreen({
              ...greendicenumber,
              positionNo: count + 4,
              count: greendicenumber.number + greendicenumber.count,
              value: 0,
              turn: false,
            });
          }
        });
        // const greennewposition = [
        //   greenposition1,
        //   greenposition2,
        //   greenposition3,
        //   greenposition4,
        // ];
        // RemoveToken(greennewposition, bluenewposition, setblue, bluedicenumber);
        console.log("ok 0");
      }
    }

    if (
      value === 1 &&
      greendicenumber.value === 6 &&
      greendicenumber.positionOut1 === false
    ) {
      setgreen({
        ...greendicenumber,
        six: 0,
        positionNo1: 4,
        positionOut1: true,
        value: 0,
        turn: true,
      });
      setblue({ ...bluedicenumber, turn: false });
    } else if (
      value === 1 &&
      greendicenumber.positionOut1 &&
      greendicenumber.value > 0
    ) {
      if (greendicenumber.value === 6) {
        console.log("okkkk0");

        setblue({ ...bluedicenumber, turn: false });
        countvalue.map(({ count }, index) => {
          if (greendicenumber.count1 + greendicenumber.number === count) {
            console.log(greendicenumber.count1 + greendicenumber.number);
            greenposition1 = greendicenumber.positionNo;
            greenposition2 = count + 4;
            greenposition3 = greendicenumber.positionNo2;
            greenposition4 = greendicenumber.positionNo3;
            setgreen({
              ...greendicenumber,
              positionNo1: count + 4,
              count1: greendicenumber.number + greendicenumber.count1,
              value: 0,
              turn: true,
            });
          }
        });
        // const greennewposition = [
        //   greenposition1,
        //   greenposition2,
        //   greenposition3,
        //   greenposition4,
        // ];
        // RemoveToken(greennewposition, bluenewposition, setblue, bluedicenumber);
      } else {
        setblue({ ...bluedicenumber, turn: true });
        console.log("okkkk1");
        countvalue.map(({ count }, index) => {
          if (greendicenumber.count1 + greendicenumber.number === count) {
            console.log(greendicenumber.count + greendicenumber.number);
            greenposition1 = greendicenumber.positionNo;
            greenposition2 = count + 4;
            greenposition3 = greendicenumber.positionNo2;
            greenposition4 = greendicenumber.positionNo3;
            setgreen({
              ...greendicenumber,
              positionNo1: count + 4,
              count1: greendicenumber.number + greendicenumber.count1,
              value: 0,
              turn: false,
            });
          }
        });
        console.log("ok 1");
        // const greennewposition = [
        //   greenposition1,
        //   greenposition2,
        //   greenposition3,
        //   greenposition4,
        // ];
        // RemoveToken(greennewposition, bluenewposition, setblue, bluedicenumber);
      }
    }

    if (
      value === 2 &&
      greendicenumber.value === 6 &&
      greendicenumber.positionOut2 === false
    ) {
      setgreen({
        ...greendicenumber,
        six: 0,
        positionNo2: 4,
        positionOut2: true,
        value: 0,
        turn: true,
      });
      setblue({ ...bluedicenumber, turn: false });
    } else if (
      value === 2 &&
      greendicenumber.positionOut2 &&
      greendicenumber.value > 0
    ) {
      if (greendicenumber.value === 6) {
        console.log("okkkk0");

        setblue({ ...bluedicenumber, turn: false });
        countvalue.map(({ count }, index) => {
          if (greendicenumber.count2 + greendicenumber.number === count) {
            greenposition1 = greendicenumber.positionNo;
            greenposition2 = greendicenumber.positionNo1;
            greenposition3 = count + 4;
            greenposition4 = greendicenumber.positionNo3;
            setgreen({
              ...greendicenumber,
              positionNo2: count + 4,
              count2: greendicenumber.number + greendicenumber.count2,
              value: 0,
              turn: true,
            });
          }
        });
        // const greennewposition = [
        //   greenposition1,
        //   greenposition2,
        //   greenposition3,
        //   greenposition4,
        // ];
        // RemoveToken(greennewposition, bluenewposition, setblue, bluedicenumber);
      } else {
        setblue({ ...bluedicenumber, turn: true });
        console.log("okkkk1");
        countvalue.map(({ count }, index) => {
          if (greendicenumber.count2 + greendicenumber.number === count) {
            greenposition1 = greendicenumber.positionNo;
            greenposition2 = greendicenumber.positionNo1;
            greenposition3 = count + 4;
            greenposition4 = greendicenumber.positionNo3;
            setgreen({
              ...greendicenumber,
              positionNo2: count + 4,
              count2: greendicenumber.number + greendicenumber.count2,
              value: 0,
              turn: false,
            });
          }
        });
        // const greennewposition = [
        //   greenposition1,
        //   greenposition2,
        //   greenposition3,
        //   greenposition4,
        // ];
        // RemoveToken(greennewposition, bluenewposition, setblue, bluedicenumber);
        console.log("ok 2");
      }
    }

    if (
      value === 3 &&
      greendicenumber.value === 6 &&
      greendicenumber.positionOut3 === false
    ) {
      setgreen({
        ...greendicenumber,
        six: 0,
        positionNo3: 4,
        positionOut3: true,
        value: 0,
        turn: true,
      });
      setblue({ ...bluedicenumber, turn: false });
    } else if (
      value === 3 &&
      greendicenumber.positionOut3 &&
      greendicenumber.value > 0
    ) {
      if (greendicenumber.value === 6) {
        console.log("okkkk0");

        setblue({ ...bluedicenumber, turn: false });
        countvalue.map(({ count }, index) => {
          if (greendicenumber.count3 + greendicenumber.number === count) {
            greenposition1 = greendicenumber.positionNo;
            greenposition2 = greendicenumber.positionNo1;
            greenposition3 = greendicenumber.positionNo2;
            greenposition4 = count + 4;
            setgreen({
              ...greendicenumber,
              positionNo3: count + 4,
              count3: greendicenumber.number + greendicenumber.count3,
              value: 0,
              turn: true,
            });
          }
        });
        // const greennewposition = [
        //   greenposition1,
        //   greenposition2,
        //   greenposition3,
        //   greenposition4,
        // ];
        // RemoveToken(greennewposition, bluenewposition);
      } else {
        console.log("okkkk1");
        countvalue.map(({ count }, index) => {
          if (greendicenumber.count3 + greendicenumber.number === count) {
            greenposition1 = greendicenumber.positionNo;
            greenposition2 = greendicenumber.positionNo1;
            greenposition3 = greendicenumber.positionNo2;
            greenposition4 = count + 4;
            setgreen({
              ...greendicenumber,
              positionNo3: count + 4,
              count3: greendicenumber.number + greendicenumber.count3,
              value: 0,
              turn: false,
            });
          }
        });
        // const greennewposition = [
        //   greenposition1,
        //   greenposition2,
        //   greenposition3,
        //   greenposition4,
        // ];
        // RemoveToken(greennewposition, bluenewposition, setblue, bluedicenumber);

        setblue({ ...bluedicenumber, turn: true });
      }
      console.log("ok 3");
    }
  };

  const ComputerClicker = () => {
    setdisplayludo("flex");
    setdisplayopp("none");
    setgreen({ ...greendicenumber, computerPlay: true });
  };

  const HumanClicker = () => {
    setdisplayludo("flex");
    setdisplayopp("none");
    setgreen({ ...greendicenumber, computerPlay: false });
  };

  useEffect(() => {
    console.log(greendicenumber);
    console.log(bluedicenumber);
    console.log(vall);
  }, [greendicenumber, vall]);

  return (
    <GlobalContext.Provider
      value={{
        Bluechange,
        bluedicenumber,
        BlueDiceValues,
        BlueChangeposition,
        GreenChangeposition,
        Greenchange,
        greendicenumber,
        HumanClicker,
        ComputerClicker,
        displayludo,
        displayopp,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// export const useGlobalContext = () => useContext(GlobalContext);
