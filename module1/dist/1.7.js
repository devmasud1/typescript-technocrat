"use strict";
{ // operator
    //spread operator
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['d', 'e', 'f'];
    arr1.push(...arr2);
    const student1 = {
        name: 'ab',
        age: 12,
        roll: 2
    };
    const student2 = {
        name: 'xy',
        age: 11,
        roll: 1
    };
    const studentList = Object.assign(Object.assign({}, student1), student2);
    //rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hey ${friend}`));
    };
    greetFriends('a', 'b', 'c');
    //destructuring operator
}
