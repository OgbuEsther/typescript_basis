const num: number = 4;
const num2: number = 5;

const sum: number = num + num2;
console.log(sum);

const myName: string = "Esther Ogbu";

const isStudent: boolean = true;

const myAge: number = 25;

const data: any = "This can be any type of data";

const myArray: number[] = [1, 2, 3, 4, 5];

const anyArray: any[] = [1, "two", true, { name: "Esther" }];

const items: (string | number)[] = ["apple", 1, "banana", 2];

//tuple
const person: [string, number, number, string] = ["Esther", 25, 30, "Chi chi"];

//enums
enum Role {
  Admin,
  Manager,
  User,
  Guest,
}
const userRole: Role = Role.User;

//Functions
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function fullStack(frontend: boolean, backend?: boolean): void {
  console.log(`Frontend: ${frontend}`);
}

function greetUser(name: string = "User"): string {
  console.log(`Hello, ${name}!`);
  return name;
}

//objects
let student: {
  name: string;
  age: number;
  isEnrolled: boolean;
} = {
  name: "Esther",
  age: 25,
  isEnrolled: true,
};
