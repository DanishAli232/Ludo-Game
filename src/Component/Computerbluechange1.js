export const computerbluechange = (
    greendicenumber,
    setgreen,
    setblue,
    bluedicenumber
) => {
    let number1 = Math.floor(Math.random() * 6) + 1;
    if (bluedicenumber.Noout === false) {
        setblue({
            ...bluedicenumber,
            number: number1,
            value: 0,
            computerTurn: false,
            message: "",
        });
        setgreen({
            ...greendicenumber,
            computerTurn: true,
        });
    } else if (number1 !== 6) {
        console.log("yes0");
        setblue({
            ...bluedicenumber,
            number: number1,
            value: number1,
            computerTurn: true,
            message: "",
        });
    } else {
        console.log("");
    }

    if (number1 === 6) {
        setgreen({...greendicenumber, computerTurn: false });

        setblue({
            ...bluedicenumber,
            number: number1,
            value: 6,
            Noout: true,
            message: "",
            computerTurn: true,
        });
    }
};