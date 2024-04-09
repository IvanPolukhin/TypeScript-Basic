// TYPES
/*
 const sumArgs = (a: number, b: number): number => a + b;

 const now = new Date();

 now.toLowerCase();

 let a: boolean;

 a = true;

 a = false;
*/


// Bad
/*
const user: object = {
    name: 'John',
    age: 35,
    isAdmin: false
}
*/

// Better
/*
const user: {
    name: string;
    age: number;
    isAdmin: boolean;
} = {
    name: 'John',
    age: 35,
    isAdmin: false
}
*/

// Good
/*
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
}

const user: User = {
    name: 'John',
    age: 35,
    isAdmin: false
}
*/

// Good
/*
interface IUser {
    name: string;
    age: number;
    isAdmin: boolean;
}

const user: IUser = {
    name: 'John',
    age: 35,
    isAdmin: false
}
*/

// ARRAYS
/*
const stringArray: (string)[] = ['a', 'b', 'c'];
stringArray.push('d'); //error
const stringNumberArray: (string | number)[] = ['a', 'b', 3];

const anyArray: any[] = [1, 'hi!', false];
*/

// TUPLES
/*
const numericTuple = [1, 2] as const;
numericTuple.push(3); //error
*/

// FUNCTIONS
/*
// FUNCTIONS DECLARATION
function printMsg(msg: string): void {
    console.log(msg);
}

// FUNCIONAL EXPRESSION
const printMsg = function(msg: string): void {
    console.log(msg);
};

// ARROW FUNCTIONS
const printMsg = (msg:string):void => {
    console.log(msg);
};

// OPTIONAL PARAMETERS
function printMsg(msg: string, additionalMsg?: string): void {
    console.log(`${msg} ${additionalMsg}`);
}

printMsg('1stMsg')
printMsg('1stMsg', '2stMsg');

// DEFAULT PARAMETERS
function printMsg(msg: string, additionalMsg: string = 'default string'): void {
    console.log(`${msg} ${additionalMsg}`);
}

printMsg('1stMsg');
printMsg('1stMsg', '2stMsg');

// VIA INTERFACE
interface ISimFunc {
    (a: number, b: number): number;
}

let sum: ISimFunc;

sum = (a: number, b: number): number => a + b;

sum = function (a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2));
*/

// NESTED ARRAY
// const nestedArray: (number[] | string[])[] = [[1, 2, 3], ['a', 'b', 'c']];
/*
interface IUser {
    userId: number;
    name: string;
    age: number;
}

interface IGetUserFunc {
    (userId: number): IUser | null;
}

const getUser: IGetUserFunc = (userId) => {
    const user: IUser = {
        userId,
        name: 'ivan',
        age: 19
    };
    if (Math.random() > 0.5) {
        return user;
    }
    return null;
}

console.log(getUser(1));
console.log(getUser(2));
*/

// UNION TYPES
/*
// PRIMITIVE TYPES
let value: string | number | boolean | { a: number };
value = "hello";        // ОК
value = 42;             // ОК
value = true;           // ОК
value = { a: 15 }       // OK
value = { a: 'hello' }  // ERROR

// IN FUNCION PARAMETERS
const transformFunc = (value: number | string) => {
    if (typeof value === 'string') {
        return `String is ${value}`;
    } else if (typeof value === 'number') {
        return value * 2;
    }
}

console.log(transformFunc('Hi'));
console.log(transformFunc(3));
*/

// TYPE ALIASES
/*
// SIMPLIEST CASE
type NumberOrBoolean = number | boolean | { name: string; age: number };
let myValue: NumberOrBoolean;
const user: NumberOrBoolean = {
    name: 'anton',
    age: 16
};
myValue = 300;   // OK
myValue = true;  // OK
myValue = 'hi';  // ERROR

type NumberOrBoolean = number | boolean | { name: string } | { age: number };
let myValue: NumberOrBoolean;
const user: NumberOrBoolean = {
    name: 'anton',
    age: 16
};
// TYPES INTERSECTION
type a = {
    propA: string;
}

type b = {
    propB: number
}

type c = a & b;

const myObj: c = {
    propA: 'hi',
    propB: 42
};
// LITERAL TYPES
type OnOff = 1 | 0;

const checkDeviceState = (signal: OnOff) => {
    if (signal === 1) {
        return 'Divice enabled';
    } else if (signal === 0) {
        return 'Divice disabled'
    }
}

console.log(checkDeviceState(1));
console.log(checkDeviceState(0));
*/

// ENUMS
/*
// SIMPLIEST CASE 
enum DiviceStates {
    enabled, // 0
    disabled, // 1
    broken // 2
}

const { enabled, disabled, broken } = DiviceStates

console.log(enabled);
console.log(disabled);
console.log(broken);
// START FROM DIFFERENT NUMBER
enum DiviceStates {
    enabled = 4, // 4 
    disabled, // 5 
    broken // 6
}
// HETEROGENIC ENUMS
enum heterogenicEnum {
    a = 'alala',
    b = 2
}
// CONSTANT & COMPUTED MEMBERS
enum FileAccess {
    // constant numbers
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = '123'.length,
}

*/
// NESTED ENUMS
enum MyEnum1 {
    One,
    Two
}

enum MyEnum2 {
    First = MyEnum1.One,
    Second = MyEnum1.Two
}