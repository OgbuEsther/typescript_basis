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


//types and interfaces
type User ={
  name: string;
  age: number;
  isEnrolled: boolean;
}

let user : User = {
  name : "esther",
  age : 25,
  isEnrolled : true,
}

type VotersInfo = {
  name : string,
  age : number,
  registered : boolean
}

const voter :VotersInfo = {
name : "John",
age : 50,
registered : true
}


//similarities :
//used to structure data shape
type Products = {
   name : string;
  price : number;
  inStock : boolean;
}
interface Product {
  name : string;
  price : number;
  inStock : boolean;
}

//used as function params
interface greet {
  name : string;
}
type greets = {
name : string;
}

function hello(user :greets){
  console.log(`Hello, ${user.name}!`);
}

//support optional and readonly parameters
type UserInfo = {
  name : string;
  readonly age : number;
  email? : string;
}
interface UserInfos  {
  name : string;
 readonly age : number;
  email? : string;
}

//differences 
//interface can be reused or reopened 
interface IUser {
  name : string
}
interface IUser{
  age : number

}
const obj : IUser ={
  name : "Esther",
  age : 25
}

////type cannot be reopened or reused
type IUsers = {
  name : string
}


//type can be used to represent more than objects
type Name = string
type Age = number
type UserDetails = {
  name : string;
  age : number;
}
type Admin =[string , number]
type Minus = (a:number ,b:number)=> number

// interface uses extends , type uses intersection 
interface Parent {
  height : string;
  isFemale : boolean;
}
interface Child extends Parent {
  complexion : string
}

const Jace : Child ={
  height : "5ft",
  isFemale : false,
  complexion : "fair"
}

type ParentInfo =  {
    height : string;
  isFemale : boolean;
}

type ChildInfo = ParentInfo & {
  complexion : string
}

const Esther : ChildInfo ={
  height : "5'2ft",
  isFemale : true,
  complexion : "dark"
}