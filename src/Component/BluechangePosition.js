import { countvalue } from "../count";

export const bluechangetoken = (
    value,
    greendicenumber,
    setgreen,
    setblue,
    bluedicenumber
) => {
    let vl = false;
    let pos;
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
            totalsixvalue: bluedicenumber.totalsixvalue + 1,
        });
        if (greendicenumber.computerPlay) {
            setgreen({
                ...greendicenumber,
                computerTurn: false,
            });
        } else {
            setgreen({...greendicenumber, turn: false });
        }
    } else if (
        value === 0 &&
        bluedicenumber.positionOut &&
        bluedicenumber.value > 0
    ) {
        if (bluedicenumber.value === 6) {
            if (greendicenumber.computerPlay) {
                setgreen({
                    ...greendicenumber,
                    computerTurn: false,
                });
            } else {
                setgreen({...greendicenumber, turn: false });
            }
            console.log("yess4");

            countvalue.map(({ count }, index) => {
                if (bluedicenumber.count + bluedicenumber.number === count) {
                    vl = true;
                    pos = count + 1;

                    if (pos === 57) {
                        console.log(pos);
                        setblue({
                            ...bluedicenumber,
                            totalouttoken: bluedicenumber.totalouttoken + 1,
                            positionNo: count + 1,
                            count: bluedicenumber.number + bluedicenumber.count,
                            value: 0,
                            turn: true,
                        });
                    } else {
                        setblue({
                            ...bluedicenumber,
                            positionNo: count + 1,
                            count: bluedicenumber.number + bluedicenumber.count,
                            value: 0,
                            turn: true,
                        });
                    }
                }
            });

            if (vl === false) {
                setblue({
                    ...bluedicenumber,
                    value: 0,
                    turn: true,
                });
            }
        } else {
            if (greendicenumber.computerPlay) {
                setgreen({
                    ...greendicenumber,
                    computerTurn: true,
                });
            } else {
                setgreen({...greendicenumber, turn: true });
            }
            countvalue.map(({ count }, index) => {
                if (bluedicenumber.count + bluedicenumber.number === count) {
                    vl = true;
                    pos = count + 1;

                    if (pos === 57) {
                        console.log(pos);
                        setblue({
                            ...bluedicenumber,
                            totalouttoken: bluedicenumber.totalouttoken + 1,
                            positionNo: count + 1,
                            count: bluedicenumber.number + bluedicenumber.count,
                            value: 0,
                            turn: false,
                        });
                    } else {
                        setblue({
                            ...bluedicenumber,
                            positionNo: count + 1,
                            count: bluedicenumber.number + bluedicenumber.count,
                            value: 0,
                            turn: false,
                        });
                    }
                }
            });
            if (vl === false) {
                setblue({
                    ...bluedicenumber,
                    value: 0,
                    turn: false,
                });
            }
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
            totalsixvalue: 2,
        });
        if (greendicenumber.computerPlay) {
            setgreen({
                ...greendicenumber,
                computerTurn: false,
            });
        } else {
            setgreen({...greendicenumber, turn: false });
        }
    } else if (
        value === 1 &&
        bluedicenumber.positionOut1 &&
        bluedicenumber.value > 0
    ) {
        if (bluedicenumber.value === 6) {
            if (greendicenumber.computerPlay) {
                setgreen({
                    ...greendicenumber,
                    computerTurn: false,
                });
            } else {
                setgreen({...greendicenumber, turn: false });
            }
            countvalue.map(({ count }, index) => {
                if (bluedicenumber.count1 + bluedicenumber.number === count) {
                    pos = count + 1;
                    vl = true;
                    if (pos === 57) {
                        console.log(pos);
                        setblue({
                            ...bluedicenumber,
                            totalouttoken: bluedicenumber.totalouttoken + 1,
                            positionNo1: count + 1,
                            count1: bluedicenumber.number + bluedicenumber.count1,
                            value: 0,
                            turn: true,
                        });
                    } else {
                        setblue({
                            ...bluedicenumber,
                            positionNo1: count + 1,
                            count1: bluedicenumber.number + bluedicenumber.count1,
                            value: 0,
                            turn: true,
                        });
                    }
                }
            });
            if (vl === false) {
                setblue({
                    ...bluedicenumber,
                    value: 0,
                    turn: true,
                });
            }
        } else {
            if (greendicenumber.computerPlay) {
                setgreen({
                    ...greendicenumber,
                    computerTurn: true,
                });
            } else {
                setgreen({...greendicenumber, turn: true });
            }

            countvalue.map(({ count }, index) => {
                if (bluedicenumber.count1 + bluedicenumber.number === count) {
                    vl = true;
                    pos = count + 1;
                    if (pos === 57) {
                        console.log(pos);
                        setblue({
                            ...bluedicenumber,
                            totalouttoken: bluedicenumber.totalouttoken + 1,
                            positionNo1: count + 1,
                            count1: bluedicenumber.number + bluedicenumber.count1,
                            value: 0,
                            turn: true,
                        });
                    } else {
                        setblue({
                            ...bluedicenumber,
                            positionNo1: count + 1,
                            count1: bluedicenumber.number + bluedicenumber.count1,
                            value: 0,
                            turn: true,
                        });
                    }
                }
            });
            if (vl === false) {
                setblue({
                    ...bluedicenumber,
                    value: 0,
                    turn: false,
                });
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
            totalsixvalue: 3,
        });
        if (greendicenumber.computerPlay) {
            setgreen({
                ...greendicenumber,
                computerTurn: false,
            });
        } else {
            setgreen({...greendicenumber, turn: false });
        }
    } else if (
        value === 2 &&
        bluedicenumber.positionOut2 &&
        bluedicenumber.value > 0
    ) {
        if (bluedicenumber.value === 6) {
            if (greendicenumber.computerPlay) {
                // computerPlay();
                setgreen({
                    ...greendicenumber,
                    computerTurn: false,
                });
            } else {
                setgreen({...greendicenumber, turn: false });
            }
            countvalue.map(({ count }, index) => {
                if (bluedicenumber.count2 + bluedicenumber.number === count) {
                    vl = true;
                    pos = count + 1;
                    if (pos === 57) {
                        console.log(pos);
                        setblue({
                            ...bluedicenumber,
                            totalouttoken: bluedicenumber.totalouttoken + 1,
                            positionNo2: count + 1,
                            count2: bluedicenumber.number + bluedicenumber.count2,
                            value: 0,
                            turn: true,
                        });
                    } else {
                        setblue({
                            ...bluedicenumber,
                            positionNo2: count + 1,
                            count2: bluedicenumber.number + bluedicenumber.count2,
                            value: 0,
                            turn: true,
                        });
                    }
                }
            });
            if (vl === false) {
                setblue({
                    ...bluedicenumber,
                    value: 0,
                    turn: true,
                });
            }
        } else {
            if (greendicenumber.computerPlay) {
                setgreen({
                    ...greendicenumber,
                    computerTurn: true,
                });
            } else {
                setgreen({...greendicenumber, turn: true });
            }

            countvalue.map(({ count }, index) => {
                if (bluedicenumber.count2 + bluedicenumber.number === count) {
                    pos = count + 1;
                    vl = true;
                    if (pos === 57) {
                        console.log(pos);
                        setblue({
                            ...bluedicenumber,
                            totalouttoken: bluedicenumber.totalouttoken + 1,
                            positionNo2: count + 1,
                            count2: bluedicenumber.number + bluedicenumber.count2,
                            value: 0,
                            turn: true,
                        });
                    } else {
                        setblue({
                            ...bluedicenumber,
                            positionNo2: count + 1,
                            count2: bluedicenumber.number + bluedicenumber.count2,
                            value: 0,
                            turn: true,
                        });
                    }
                }
            });
            if (vl === false) {
                setblue({
                    ...bluedicenumber,
                    value: 0,
                    turn: false,
                });
            }
        }
    }

    if (
        value === 3 &&
        bluedicenumber.value === 6 &&
        bluedicenumber.positionOut3 === false
    ) {
        setblue({
            ...bluedicenumber,
            six: 0,
            positionNo3: 1,
            positionOut3: true,
            value: 0,
            turn: true,
        });
        if (greendicenumber.computerPlay) {
            // computerPlay();
            setgreen({
                ...greendicenumber,
                computerTurn: false,
            });
        } else {
            setgreen({...greendicenumber, turn: false });
        }
    } else if (
        value === 3 &&
        bluedicenumber.positionOut3 &&
        bluedicenumber.value > 0
    ) {
        if (bluedicenumber.value === 6) {
            console.log("okkkk0");

            if (greendicenumber.computerPlay) {
                // computerPlay();
                setgreen({
                    ...greendicenumber,
                    computerTurn: false,
                });
            } else {
                setgreen({...greendicenumber, turn: false });
            }
            countvalue.map(({ count }, index) => {
                if (bluedicenumber.count3 + bluedicenumber.number === count) {
                    pos = count + 1;
                    vl = true;
                    if (pos === 57) {
                        console.log(pos);
                        setblue({
                            ...bluedicenumber,
                            totalouttoken: bluedicenumber.totalouttoken + 1,
                            positionNo3: count + 1,
                            count3: bluedicenumber.number + bluedicenumber.count3,
                            value: 0,
                            turn: true,
                        });
                    } else {
                        setblue({
                            ...bluedicenumber,
                            positionNo3: count + 1,
                            count3: bluedicenumber.number + bluedicenumber.count3,
                            value: 0,
                            turn: true,
                        });
                    }
                }
            });
            if (vl === false) {
                setblue({
                    ...bluedicenumber,
                    value: 0,
                    turn: true,
                });
            }
        } else {
            if (greendicenumber.computerPlay) {
                setgreen({
                    ...greendicenumber,
                    computerTurn: true,
                });
            } else {
                setgreen({...greendicenumber, turn: true });
            }
            console.log("okkkk1");
            countvalue.map(({ count }, index) => {
                if (bluedicenumber.count3 + bluedicenumber.number === count) {
                    vl = true;
                    pos = count + 1;
                    if (pos === 57) {
                        console.log(pos);
                        setblue({
                            ...bluedicenumber,
                            totalouttoken: bluedicenumber.totalouttoken + 1,
                            positionNo3: count + 1,
                            count3: bluedicenumber.number + bluedicenumber.count3,
                            value: 0,
                            turn: true,
                        });
                    } else {
                        setblue({
                            ...bluedicenumber,
                            positionNo3: count + 1,
                            count3: bluedicenumber.number + bluedicenumber.count3,
                            value: 0,
                            turn: true,
                        });
                    }
                }
            });
            if (vl === false) {
                setblue({
                    ...bluedicenumber,
                    value: 0,
                    turn: false,
                });
            }

            console.log("ok 3");
        }
    }
};