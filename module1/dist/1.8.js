"use strict";
{ //destructuring
    // object destructuring
    const studentInfo = {
        Id: 154,
        name: {
            firstName: "abir",
            lastName: "rahman",
        },
        contactNumber: "01",
        address: "23 street, Mirpur-11",
    };
    const { address, name: { lastName } } = studentInfo;
    // array destructuring
    const student = ['abir', 'abid', 'ahad', 'ayon'];
    // const [a, b, bestStudent] = student;
    const [, , bestStudent, ...rest] = student;
}
