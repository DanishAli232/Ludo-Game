import { countvalue } from "../count";

export const computerBluechangePosition = (
    greendicenumber,
    setgreen,
    setblue,
    bluedicenumber
) => {
    if (
        greendicenumber.computerValues === 0 &&
        greendicenumber.value === 6 &&
        greendicenumber.positionOut === false
    ) {
        setgreen({
            ...greendicenumber,
            six: 1,
            positionNo: 4,
            positionOut: true,
            value: 0,
            computerTurn: true,
        });
        setblue({...bluedicenumber, turn: false });
    } else if (
        greendicenumber.computerValues === 0 &&
        greendicenumber.positionOut &&
        greendicenumber.value > 0
    ) {
        console.log("yes2");
        if (greendicenumber.value === 6) {
            setblue({...bluedicenumber, turn: false });
            if (greendicenumber.six === 1) {
                setgreen({
                    ...greendicenumber,
                    six: 2,
                    positionNo1: 4,
                    positionOut1: true,
                    value: 0,
                    computerTurn: true,
                    totalsixvalue: 2,
                });
            } else if (greendicenumber.six === 2) {
                setgreen({
                    ...greendicenumber,
                    six: 3,
                    positionNo2: 4,
                    positionOut2: true,
                    value: 0,
                    computerTurn: true,
                    totalsixvalue: 3,
                });
            } else if (greendicenumber.six === 3) {
                setgreen({
                    ...greendicenumber,
                    six: 4,
                    positionNo3: 4,
                    positionOut3: true,
                    value: 0,
                    computerTurn: true,
                    totalsixvalue: 4,
                });
            } else {
                if (greendicenumber.totalsix === 1) {
                    console.log("pass");
                    countvalue.map(({ count }, index) => {
                        if (greendicenumber.count + greendicenumber.number === count) {
                            setgreen({
                                ...greendicenumber,
                                positionNo: count + 4,
                                count: greendicenumber.number + greendicenumber.count,
                                value: 0,
                                computerTurn: true,
                            });
                        }
                    });
                    if (greendicenumber.positionNo >= 55) {
                        setgreen({
                            ...greendicenumber,
                            totalsix: 2,
                        });
                    }
                    if (
                        greendicenumber.totalsixvalue === 1 &&
                        greendicenumber.positionNo >= 55
                    ) {
                        setgreen({
                            ...greendicenumber,
                            Noout: false,
                        });
                    }
                } else if (greendicenumber.totalsix === 2) {
                    console.log("pass1");
                    countvalue.map(({ count }, index) => {
                        if (greendicenumber.count1 + greendicenumber.number === count) {
                            setgreen({
                                ...greendicenumber,
                                positionNo1: count + 4,
                                count1: greendicenumber.number + greendicenumber.count1,
                                value: 0,
                                computerTurn: true,
                            });
                        }
                    });
                    if (greendicenumber.positionNo1 >= 55) {
                        setgreen({
                            ...greendicenumber,
                            totalsix: 3,
                        });
                    }
                    if (
                        greendicenumber.totalsixvalue === 2 &&
                        greendicenumber.positionNo1 >= 55
                    ) {
                        setgreen({
                            ...greendicenumber,
                            Noout: false,
                        });
                    }
                } else if (greendicenumber.totalsix === 3) {
                    console.log("pass2");
                    countvalue.map(({ count }, index) => {
                        if (greendicenumber.count2 + greendicenumber.number === count) {
                            setgreen({
                                ...greendicenumber,
                                positionNo2: count + 4,
                                count2: greendicenumber.number + greendicenumber.count2,
                                value: 0,
                                computerTurn: true,
                            });
                        }
                    });
                    if (greendicenumber.positionNo2 >= 55) {
                        setgreen({
                            ...greendicenumber,
                            totalsix: 4,
                        });
                    }
                    if (
                        greendicenumber.totalsixvalue === 3 &&
                        greendicenumber.positionNo3 >= 55
                    ) {
                        setgreen({
                            ...greendicenumber,
                            Noout: false,
                        });
                    }
                }
            }
        } else {
            console.log("yes3");
            setblue({...bluedicenumber, turn: true });

            if (greendicenumber.totalsix === 1) {
                console.log("pass");
                countvalue.map(({ count }, index) => {
                    if (greendicenumber.count + greendicenumber.number === count) {
                        setgreen({
                            ...greendicenumber,
                            positionNo: count + 4,
                            count: greendicenumber.number + greendicenumber.count,
                            value: 0,
                            computerTurn: false,
                        });
                    }
                });
                if (greendicenumber.positionNo >= 55) {
                    setgreen({
                        ...greendicenumber,
                        totalsix: 2,
                    });
                }
                if (
                    greendicenumber.totalsixvalue === 1 &&
                    greendicenumber.positionNo >= 55
                ) {
                    setgreen({
                        ...greendicenumber,
                        Noout: false,
                    });
                }
            } else if (greendicenumber.totalsix === 2) {
                console.log("pass1");
                countvalue.map(({ count }, index) => {
                    if (greendicenumber.count1 + greendicenumber.number === count) {
                        setgreen({
                            ...greendicenumber,
                            positionNo1: count + 4,
                            count1: greendicenumber.number + greendicenumber.count1,
                            value: 0,
                            computerTurn: false,
                        });
                    }
                });
                if (greendicenumber.positionNo1 >= 55) {
                    setgreen({
                        ...greendicenumber,
                        totalsix: 3,
                    });
                }
                if (
                    greendicenumber.totalsixvalue === 2 &&
                    greendicenumber.positionNo1 >= 55
                ) {
                    setgreen({
                        ...greendicenumber,
                        Noout: false,
                    });
                }
            } else if (greendicenumber.totalsix === 3) {
                console.log("pass2");
                countvalue.map(({ count }, index) => {
                    if (greendicenumber.count2 + greendicenumber.number === count) {
                        setgreen({
                            ...greendicenumber,
                            positionNo2: count + 4,
                            count2: greendicenumber.number + greendicenumber.count2,
                            value: 0,
                            computerTurn: false,
                        });
                    }
                });
                if (greendicenumber.positionNo2 >= 55) {
                    setgreen({
                        ...greendicenumber,
                        totalsix: 4,
                    });
                }
                if (
                    greendicenumber.totalsixvalue === 3 &&
                    greendicenumber.positionNo3 >= 55
                ) {
                    setgreen({
                        ...greendicenumber,
                        Noout: false,
                    });
                }
            }

            console.log("ok 0");
        }
    }
};