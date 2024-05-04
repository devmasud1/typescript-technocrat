"use strict";
{ //function 
    //normal function
    function sum(x, y) {
        return x + y;
    }
    sum(1, 3);
    //arrow function
    const add = (a, b) => a + b;
    // obj  --> function ==> method
    const dev1 = {
        name: 'x',
        salary: 0,
        addSalary(salary) {
            return `updated salary : ${this.salary + salary}`;
        }
    };
    //callback function
    const arr = [1, 3, 4];
    const newArr = arr.map((ele) => ele * ele);
    console.log(newArr);
}
