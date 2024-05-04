{//function 

//normal function
function sum(x : number, y : number) : number {
    return x + y;
}
sum(1, 3)

//arrow function
const add = (a: number, b : number) : number => a + b

// obj  --> function ==> method
const dev1 = {
    name : 'x',
    salary: 0,
    addSalary(salary: number) : string {
        return `updated salary : ${this.salary + salary}`
    }
}

//callback function
const arr : number[] = [1, 3, 4]
const newArr : number [] = arr.map((ele : number) : number => ele*ele)
console.log(newArr)
}