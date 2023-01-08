import { countvalue } from "../count";

export const computerbluechangePosition = (
    greendicenumber,
    setgreen,
    setblue,
    bluedicenumber
) => {
    if (
        bluedicenumber.computerValues === 0 &&
        bluedicenumber.value === 6 &&
        bluedicenumber.positionOut === false
    ) {
        setblue({
            ...bluedicenumber,
            six: 1,
            positionNo: 1,
            positionOut: true,
            value: 0,
            computerTurn: true,
        });
        setgreen({...greendicenumber, computerTurn: false });
    } else if (
        bluedicenumber.computerValues === 0 &&
        bluedicenumber.positionOut &&
        bluedicenumber.value > 0
    ) {
        console.log("yes2");
        if (bluedicenumber.value === 6) {
            setgreen({...greendicenumber, computerTurn: false });
            if (bluedicenumber.six === 1) {
                setblue({
                    ...bluedicenumber,
                    six: 2,
                    positionNo1: 1,
                    positionOut1: true,
                    value: 0,
                    computerTurn: true,
                    totalsixvalue: 2,
                });
            } else if (bluedicenumber.six === 2) {
                setblue({
                    ...bluedicenumber,
                    six: 3,
                    positionNo2: 1,
                    positionOut2: true,
                    value: 0,
                    computerTurn: true,
                    totalsixvalue: 3,
                });
            } else if (bluedicenumber.six === 3) {
                setblue({
                    ...bluedicenumber,
                    six: 4,
                    positionNo3: 1,
                    positionOut3: true,
                    value: 0,
                    computerTurn: true,
                    totalsixvalue: 4,
                });
            } else {
                if (bluedicenumber.totalsix === 1) {
                    console.log("pass");
                    countvalue.map(({ count }, index) => {
                        if (bluedicenumber.count + bluedicenumber.number === count) {
                            setblue({
                                ...bluedicenumber,
                                positionNo: count + 1,
                                count: bluedicenumber.number + bluedicenumber.count,
                                value: 0,
                                computerTurn: true,
                            });
                        }
                    });
                    if (bluedicenumber.positionNo >= 52) {
                        setblue({
                            ...bluedicenumber,
                            totalsix: 2,
                        });
                    }
                    if (
                        bluedicenumber.totalsixvalue === 1 &&
                        bluedicenumber.positionNo >= 52
                    ) {
                        setblue({
                            ...bluedicenumber,
                            Noout: false,
                        });
                    }
                } else if (bluedicenumber.totalsix === 2) {
                    console.log("pass1");
                    countvalue.map(({ count }, index) => {
                        if (bluedicenumber.count1 + bluedicenumber.number === count) {
                            setblue({
                                ...bluedicenumber,
                                positionNo1: count + 1,
                                count1: bluedicenumber.number + bluedicenumber.count1,
                                value: 0,
                                computerTurn: true,
                            });
                        }
                    });
                    if (bluedicenumber.positionNo1 >= 52) {
                        setblue({
                            ...bluedicenumber,
                            totalsix: 3,
                        });
                    }
                    if (
                        bluedicenumber.totalsixvalue === 2 &&
                        bluedicenumber.positionNo1 >= 52
                    ) {
                        setblue({
                            ...bluedicenumber,
                            Noout: false,
                        });
                    }
                } else if (bluedicenumber.totalsix === 3) {
                    console.log("pass2");
                    countvalue.map(({ count }, index) => {
                        if (bluedicenumber.count2 + bluedicenumber.number === count) {
                            setblue({
                                ...bluedicenumber,
                                positionNo2: count + 1,
                                count2: bluedicenumber.number + bluedicenumber.count2,
                                value: 0,
                                computerTurn: true,
                            });
                        }
                    });
                    if (bluedicenumber.positionNo2 >= 52) {
                        setblue({
                            ...bluedicenumber,
                            totalsix: 4,
                        });
                    }
                    if (
                        bluedicenumber.totalsixvalue === 3 &&
                        bluedicenumber.positionNo2 >= 52
                    ) {
                        setblue({
                            ...bluedicenumber,
                            Noout: false,
                        });
                    }
                } else if (bluedicenumber.totalsix === 4) {
                    console.log("pass2");
                    countvalue.map(({ count }, index) => {
                        if (bluedicenumber.count3 + bluedicenumber.number === count) {
                            setblue({
                                ...bluedicenumber,
                                positionNo3: count + 1,
                                count3: bluedicenumber.number + bluedicenumber.count3,
                                value: 0,
                                computerTurn: true,
                            });
                        }
                    });
                    if (bluedicenumber.positionNo3 >= 52) {
                        setblue({
                            ...bluedicenumber,
                            totalsix: 5,
                        });
                    }
                    // if (
                    //     bluedicenumber.totalsixvalue === 4 &&
                    //     bluedicenumber.positionNo3 >= 52
                    // ) {
                    //     setblue({
                    //         ...bluedicenumber,
                    //         Noout: false,
                    //     });
                    // }
                } else if (bluedicenumber.totalsix === 5) {
                    setblue({
                        ...bluedicenumber,
                        computerTurn: false,
                    });
                    setgreen({
                        ...greendicenumber,
                        computerTurn: true,
                    });
                }
            }
        } else {
            console.log("yes3");
            setgreen({...greendicenumber, computerTurn: true });

            if (bluedicenumber.totalsix === 1) {
                console.log("pass");
                countvalue.map(({ count }, index) => {
                    if (bluedicenumber.count + bluedicenumber.number === count) {
                        setblue({
                            ...bluedicenumber,
                            positionNo: count + 1,
                            count: bluedicenumber.number + bluedicenumber.count,
                            value: 0,
                            computerTurn: false,
                        });
                    }
                });
                if (bluedicenumber.positionNo >= 52) {
                    setblue({
                        ...bluedicenumber,
                        totalsix: 2,
                    });
                }
                if (
                    bluedicenumber.totalsixvalue === 1 &&
                    bluedicenumber.positionNo >= 52
                ) {
                    setblue({
                        ...bluedicenumber,
                        Noout: false,
                    });
                }
            } else if (bluedicenumber.totalsix === 2) {
                console.log("pass1");
                countvalue.map(({ count }, index) => {
                    if (bluedicenumber.count1 + bluedicenumber.number === count) {
                        setblue({
                            ...bluedicenumber,
                            positionNo1: count + 1,
                            count1: bluedicenumber.number + bluedicenumber.count1,
                            value: 0,
                            computerTurn: false,
                        });
                    }
                });
                if (bluedicenumber.positionNo1 >= 52) {
                    setblue({
                        ...bluedicenumber,
                        totalsix: 3,
                    });
                }
                if (
                    bluedicenumber.totalsixvalue === 2 &&
                    bluedicenumber.positionNo1 >= 52
                ) {
                    setblue({
                        ...bluedicenumber,
                        Noout: false,
                    });
                }
            } else if (bluedicenumber.totalsix === 3) {
                console.log("pass2");
                countvalue.map(({ count }, index) => {
                    if (bluedicenumber.count2 + bluedicenumber.number === count) {
                        setblue({
                            ...bluedicenumber,
                            positionNo2: count + 1,
                            count2: bluedicenumber.number + bluedicenumber.count2,
                            value: 0,
                            computerTurn: false,
                        });
                    }
                });
                if (bluedicenumber.positionNo2 >= 52) {
                    setblue({
                        ...bluedicenumber,
                        totalsix: 4,
                    });
                }
                if (
                    bluedicenumber.totalsixvalue === 3 &&
                    bluedicenumber.positionNo2 >= 52
                ) {
                    setblue({
                        ...bluedicenumber,
                        Noout: false,
                    });
                }

                console.log("ok 0");
            } else if (bluedicenumber.totalsix === 4) {
                console.log("pass2");
                countvalue.map(({ count }, index) => {
                    if (bluedicenumber.count3 + bluedicenumber.number === count) {
                        setblue({
                            ...bluedicenumber,
                            positionNo3: count + 1,
                            count3: bluedicenumber.number + bluedicenumber.count3,
                            value: 0,
                            computerTurn: false,
                        });
                    }
                });
                if (bluedicenumber.positionNo3 >= 52) {
                    setblue({
                        ...bluedicenumber,
                        totalsix: 5,
                    });
                }
                // if (
                //     bluedicenumber.totalsixvalue === 3 &&
                //     bluedicenumber.positionNo3 >= 52
                // ) {
                //     setblue({
                //         ...bluedicenumber,
                //         Noout: false,
                //     });
                // }
            } else if (bluedicenumber.totalsix === 5) {
                console.log("pass66");

                if (bluedicenumber.positionNo + bluedicenumber.number === 57) {
                    setblue({
                        ...bluedicenumber,
                        positionNo: 57,
                        totalouttoken: bluedicenumber.totalouttoken + 1,
                        value: 0,
                        computerTurn: false,
                    });
                } else if (bluedicenumber.positionNo1 + bluedicenumber.number === 57) {
                    setblue({
                        ...bluedicenumber,
                        positionNo1: 57,
                        totalouttoken: bluedicenumber.totalouttoken + 1,
                        value: 0,
                        computerTurn: false,
                    });
                } else if (bluedicenumber.positionNo2 + bluedicenumber.number === 57) {
                    setblue({
                        ...bluedicenumber,
                        positionNo2: 57,
                        totalouttoken: bluedicenumber.totalouttoken + 1,
                        value: 0,
                        computerTurn: false,
                    });
                } else if (bluedicenumber.positionNo3 + bluedicenumber.number === 57) {
                    setblue({
                        ...bluedicenumber,
                        positionNo3: 57,
                        totalouttoken: bluedicenumber.totalouttoken + 1,
                        value: 0,
                        computerTurn: false,
                    });
                }
            }
        }
    }
};