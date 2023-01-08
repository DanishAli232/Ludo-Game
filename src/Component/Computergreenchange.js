export const computergreenchange = (
    greendicenumber,
    setgreen,
    setblue,
    bluedicenumber
) => {
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
            computerTurn: true,
        });
    } else if (number1 !== 6) {
        console.log("yes0");
        setgreen({
            ...greendicenumber,
            number: number1,
            value: number1,
            computerTurn: true,
            message: "",
        });
    } else {
        console.log("");
    }

    if (number1 === 6) {
        setblue({...bluedicenumber, turn: false, computerTurn: false });

        setgreen({
            ...greendicenumber,
            number: number1,
            value: 6,
            Noout: true,
            message: "",
            computerTurn: true,
        });
    }
};