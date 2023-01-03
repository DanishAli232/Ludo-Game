export const computerBluechange = () => {
    let number1 = Math.floor(Math.random() * 6) + 1;
    if (greendicenumber.Noout === false) {
        setgreen({
            ...greendicenumber,
            number: number1,
            value: 0,
            computerTurn: false,
            message: "",
        });
        setblue({
            ...bluedicenumber,
            turn: true,
        });
    } else if (number1 !== 6) {
        setgreen({
            ...greendicenumber,
            number: number1,
            value: number1,
            computerTurn: false,
            message: "",
        });
    } else {
        console.log("");
    }

    if (number1 === 6) {
        setblue({...bluedicenumber, turn: false });
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
    }
};