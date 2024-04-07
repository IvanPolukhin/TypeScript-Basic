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
    (a: number, b: number):number;
}

let sum: ISimFunc;

sum = (a: number, b: number):number => a + b;

sum = (a: string, b: number) => a + b;
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