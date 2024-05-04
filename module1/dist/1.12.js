"use strict";
{
    //nullable types
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("provide valid text");
        }
    };
    //searchName(null);
    //unknown typeof
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3000;
            console.log(`speed is ${convertedSpeed} ms^-1`);
        }
        if (typeof value === "string") {
            const [valueInNumber, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3000;
            console.log(`speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log("please provide a valid input");
        }
    };
    //getSpeedInMeterPerSecond(1000);
    //getSpeedInMeterPerSecond(`1000 kmh^-1`);
    getSpeedInMeterPerSecond(null);
    //never
    const throwErr = (message) => {
        throw new Error(message);
    };
    throwErr("something went wrong");
}
