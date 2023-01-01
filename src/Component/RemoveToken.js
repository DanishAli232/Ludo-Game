import { useContext, useState } from "react";
import { AllPositions } from "../Allpositions";
import { GlobalContext } from "../Context/LudoContext";

import React from "react";

export const RemoveToken = (
    greennewposition,
    bluenewposition,
    setblue,
    bluedicenumber
) => {
    let val = 1;
    console.log(greennewposition);
    console.log(bluenewposition);

    bluenewposition.map((value, index) => {
        greennewposition.map((value1, index) => {
            let pos1 = AllPositions[0].blue[value].top;
            let pos2 = AllPositions[0].blue[value].left;
            let pos3 = AllPositions[0].green[value1].top;
            let pos4 = AllPositions[0].green[value1].left;
            if (pos1 === pos3 && pos2 === pos4) {
                console.log("Ok Position match");
                console.log({
                    topblue: pos1,
                    leftblue: pos2,
                    topgreen: pos3,
                    leftgreen: pos4,
                });
                console.log(val);
                if (val === 1) {
                    setblue({
                        ...bluedicenumber,
                        positionNo: 0,
                        count: 0,
                    });
                    console.log("ok value1");
                    const value2 = { positionNo: 0, count: 0 };
                    return value2;
                } else if (val === 2) {
                    setblue({
                        ...bluedicenumber,
                        positionNo1: 58,
                        count: 0,
                    });
                    console.log("ok value2");

                    const value2 = { positionNo1: 58, count: 0 };
                    return value2;
                } else if (val === 3) {
                    setblue({
                        ...bluedicenumber,
                        positionNo2: 59,
                        count: 0,
                    });
                    console.log("ok value3");

                    const value2 = { positionNo2: 59, count: 0 };
                    return value2;
                } else if (val === 4) {
                    setblue({
                        ...bluedicenumber,
                        positionNo3: 60,
                        count: 0,
                    });
                    console.log("ok value4");
                    console.log(bluedicenumber);

                    const value2 = { positionNo3: 60, count: 0 };
                    return value2;
                }
            } else {
                console.log({
                    topblue: pos1,
                    leftblue: pos2,
                    topgreen: pos3,
                    leftgreen: pos4,
                });
                console.log("No Position Match");
            }
        });
        console.log(val);
        val++;
    });
    val = 1;
};