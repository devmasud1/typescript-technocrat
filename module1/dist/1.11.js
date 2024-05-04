"use strict";
var _a, _b, _c, _d;
{
    //ternary operator || optional  chaining || nullish coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log("accepted");
    }
    else {
        console.log("access denied");
    }
    const isAdult = age >= 18 ? "accepted" : "access denied";
    console.log({ isAdult });
    // nullish coalescing operator --> null/undefined
    const isAuthenticated = undefined;
    const isAuthenticated1 = "";
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
    const result1 = isAuthenticated1 ? isAuthenticated1 : "guest";
    console.log({ result }, { result1 });
    const user = {
        name: "abid",
        address: {
            city: "Dhaka",
            road: "11/12",
            presentAddress: "main town",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No address found";
    const presentAddress = (_d = (_c = user === null || user === void 0 ? void 0 : user.address) === null || _c === void 0 ? void 0 : _c.presentAddress) !== null && _d !== void 0 ? _d : "No address found";
    console.log({ permanentAddress }, { presentAddress });
}
