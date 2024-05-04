{
  //type alias

  type Student = {
    id: number;
    roll: number;
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  }

  const student1: Student = {
    id: 302,
    roll: 22,
    name: "antik",
    age: 10,
    gender: "male",
    contactNo: "10123",
    address: 'Dhaka',
  };

  const student2: Student = {
    id: 304,
    roll: 12,
    name: "ayon",
    age: 10,
    gender: "male",
    address: 'Rangpur',
  };

type UserName = string;
type IsAdmin = boolean;

const userName: UserName = 'boby';
const isAdmin: IsAdmin = true;

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2


}
