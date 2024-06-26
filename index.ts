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
// NESTED ENUMS
enum MyEnum1 {
    One,
    Two
}

enum MyEnum2 {
    First = MyEnum1.One,
    Second = MyEnum1.Two
}
*/

// INTERFACE
/*
// BASIC INTERFACE
interface IUser {
    login: string;
    password: string;
}

const user: IUser = {
    login: 'LOGIN',
    password: '12345'
}
// INTERFACE INHERITANCE & NESTING
interface IUser {
    login: string;
    password: string;
}

interface IAdminRights {
    editArticles: boolean;
    deleteArticles: boolean;
    banUsers: boolean;
}

interface ISecret {
    secret: string;
}

interface IAdmin extends IUser, ISecret {
    permissions: IAdminRights
}

const admin: IAdmin = {
    login: 'login',
    password: '12345',
    permissions: {
        editArticles: true,
        deleteArticles: true,
        banUsers: false
    },
    secret: 'zxc'
}
// EXTEND MULTIPLE INTERFACES
interface IAged {
    age: number;
}

interface INamed {
    name: string;
}

interface IPerson extends IAged, INamed { }

const person: IPerson = {
    age: 11,
    name: 'ivan'
}
// INTERFFACE IN TYPES INTERSCTION
interface IAged {
    age: number;
}

interface INamed {
    name: string;
}

type IPerson = IAged & INamed;

const person: IPerson = {
    name: 'ivan',
    age: 19
}
// READONLY PROPERTIES
interface IUser {
    name: string;
    readonly secret: string;
}

const user: IUser = {
    name: 'ivan',
    secret: 'CANNOT BE CHANGED'
};

user.name = 'Definittely not ivan'; // OK
user.secret = 'SUCCESSFULLY CHANGED'; // ERROR
// OPTIONaLY PROPERTIES
interface IUser {
    name: string;
    age?: number
}

const userWithAge: IUser = {
    name: 'ivan',
    age: 22
};

const userWithOutAge: IUser = {
    name: 'ivan2',
}
// INDEX SIGNATURES(ARRAY)
interface INumericArray {
    [index: number]: number;
}

interface IStringArray {
    [index: number]: string;
}

const numArray: INumericArray = [1, 2, 3, 4, 5]; // OK
const strArray: IStringArray = ['a', 'b', 'c']; // OK
// INDEX SIGNATURES (OBJECT)
interface IDictionary {
    [index: string]: string;
}

const myDictionary: IDictionary = {
    number: 'число',
    table: 'стол'
};
*/

// interface method
/*
interface IGreeter {
    msg: string;
    sayHi: () => void;
}

const greeter: IGreeter = {
    msg: 'Hi!!!',
    sayHi() {
        console.log(this.msg);
    }
};

greeter.sayHi();

// Type Assertion

// Angle Brackets Syntax
const myDiv = <HTMLElement>document.getElementById('div');

// "AS" Synatax
const myDiv = document.getElementById('div') as HTMLElement;

// Non-Null Assertion Syntax
const myDiv = document.getElementById('div')!;
*/

// Classes
/*
// Simpliest Syntax
class Person {
    name: string;
    age: number;
}

const person = new Person; // Ok
person.name = 'Ivan';
person.age = 32;

const person2 = new Person('John', 11) // Error

// Simpliest Syntax (With Constructor)
class Person {
    name: string;
    age: number | null;

    constructor(name = 'Anonymous', age = null) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person(); // { name: 'Anonymous', age: null }
const person2 = new Person('John', 12); // { name:'John' age: 11 }

// Add Method
class Person {
    name: string;
    age: number;

    constructor(name = 'anonymous', age = 30) {
        this.name = name;
        this.age = age;
    }

    sayHi(): void {
        console.log(`hi! My name is ${name}`);
    }
}

const person = new Person();
const person2 = new Person('ivan', 19);

person.sayHi();
person2.sayHi();

// Classe & Interfaces
interface IPerson {
    name: string;
    age: number;
    sayHi: () => void;
}

class Person implements IPerson {
    name: string;
    age: number;

    constructor(name = 'anonymous', age = 30) {
        this.name = name;
        this.age = age;
    }

    sayHi(): void {
        console.log(`Hi! My name is ${this.name}`);

    }
}

// Arrow Func AS Methods
interface IPerson {
    name: string;
    age: number;
}

class Person implements IPerson {
    name: string;
    age: number;

    constructor(name = 'anonymous', age = 30) {
        this.name = name;
        this.age = age;
    }

    sayHi = () => {
        console.log(`Hi! My name is ${this.name}`);
    }
}
'
// Abstract Classes
abstract class AbstractGreeter {
    abstract sayHi(): void;
}

// Okay
class MyGreeter extends AbstractGreeter {
    sayHi(): void {
        console.log('hi!');
    }
}

// Not Okay
class MyGreeter1 extends AbstractGreeter {
    sayHi(msg): void {
        console.log('hi!' + msg);
    }
}

// Class Members Visibility
class MyGreeter {
    public sayHi(): void {
        console.log('hi!');
    }
}

class MyGreeter {
    protected sayHi(): void {
        console.log('hi!');
    }
}

class MyGreeter {
    private sayHi(): void {
        console.log('hi!');
    }
}
*/

// Generic
/*
// Identity Function
function identity(value) {
    return value;
}

// Generic Identity Func
function identity<T>(value: T):T {
    return value;
}

// Generic Interface
interface MyStorage<T> {
    values: T[];
    getValues: () => T[];
}

const numericStorage: MyStorage<number> = {
    values: [],
    getValues() {
        return this.values;
    },
};

const booleanStorage: MyStorage<boolean> = {
    values: [],
    getValues() {
        return this.values;
    },
};

// Generic Class
class IdentityClass<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getIdentyti(): T {
        return this.value;
    }
}

const numericIdentyti: IdentityClass<number> = new IdentityClass(1);
const strIdentyti: IdentityClass<string> = new IdentityClass('zxc');
*/

// Type Manipulations
/*
// KeyOf Operator
type Rectangle = {
    width: number;
    height: number;
};

const myRectangle: Rectangle = {
    width: 10,
    height: 20
};

const getValueFromRectProp = (prop: keyof Rectangle, rect: Rectangle) => rect[prop];

// TypeOf Operator
function abc() {
    return {
        x: 10,
        y: 'zxc'
    }
}

type ABCType = ReturnType<typeof abc>;

const abc2: typeof abc = () => {
    return {
        x: 1013213,
        y: 'qwerty'
    }
}

// Indexed Access Types
type Person = {
    age: number;
    name: string;
    isAdmin: boolean;
};

type Age = Person['age'];

// Conditional Types
interface IAnimal {
    live(): void;
}

interface Dog extends IAnimal {
    woof(): void;
}

interface Rectangle {
    width: number;
    height: string;
}

type Type = Dog extends IAnimal ? number : string;
type Type1 = Rectangle extends IAnimal ? number : string;

// Mapped Types
type StrNum = {
    [key: string]: string | number;
};

const ogj: StrNum = {
    laallala: 'adasdadada',
    test: 1312131,
    isAdmin: true
};

// Template Literal Types
type EmailLocaleDs = "welcome_email" | "email_heading";
type FooterLocaleDs = "footer_title" | "footer_sendoff";

type AllLocaleDs = `${EmailLocaleDs | FooterLocaleDs}_id`;

// Template Literal Types example #2
type Direction = 'up' | 'down' | 'left' | 'right';

type DirectionObj = {
    [key in Direction]: boolean;
};

const diretionUsed: DirectionObj = {
    left: true,
    down: false,
    right: true,
    up: true
}
*/

// Utility Types
/*
// Partial <TYPE>
interface IRectangle {
    width: number;
    height: number;
}

const partOfRectangle: Partial<IRectangle> = {
    width: 3,
};

// Required <TYPE>
interface IPoint {
    a?: number;
    b?: number;
}

const fullPoint: Required<IPoint> = {
    a: 1,
    b: 2
};

// Readonly <TYPE>
interface IPoint {
    a: number;
    b: number;
}

const frozenPoint: Readonly<IPoint> = {
    a: 1,
    b: 2
};

frozenPoint.a = 2;   // Error

// Record <KEYS, TYPE>
interface IPointData {
    a: number;
    b: number;
}

type PointNames = 'firstPoint' | 'secondPoint';

const point1: {
    [key in PointNames]: IPointData
} = {
    firstPoint: {
        a: 1,
        b: 1
    },
    secondPoint: {
        a: 2,
        b: 2
    }
}

const point: Record<PointNames, IPointData> = {
    firstPoint: {
        a: 1,
        b: 1
    },
    secondPoint: {
        a: 2,
        b: 2
    }
};

// Pick <TYPE, KEYS>
interface ToDo {
    title: string;
    description: string;
    completed: boolean;
}

type ToDoPreview = Pick<ToDo, 'title' | 'completed'>;

const toDo: ToDoPreview = {
    title: 'up',
    completed: true
}

// Omit <TYPE, Keys>
interface IPoint {
    a: number;
    b: number;
    willBeRemoved: string;
}

type Point = Omit<IPoint, 'willBeRemoved'>;

const point: Point = {
    a: 15,
    b: 1
    willBeRemoved: 'zxc' // Error
};

// Exclude <TYPE, EXCLUDEDUNION>
type Direction = 'up' | 'down' | 'left' | 'rigth'

type DirectionsWithoutLateral = Exclude<Direction, 'rigth' | 'left'>;

const direction: DirectionsWithoutLateral = 'up'; // OK
const direction1: DirectionsWithoutLateral = 'rigth'; // Error

// Extaract <TYPE, UNION>
type Direction = 'up' | 'down' | 'left' | 'rigth'

type DirectionsWithoutLateral = Extract<Direction, 'rigth' | 'left'>;

const direction: DirectionsWithoutLateral = 'up'; // Error
const direction1: DirectionsWithoutLateral = 'rigth'; // OK 

// NonNullLable <TYPE>
type SomeType = string | null | undefined;

type WithoutNullable = NonNullable<SomeType>

// Parameters <TYPE>
const sum = (a: number, b: number): number => a + b;

type SumParameters = Parameters<typeof sum>

// ConstructorParameters <TYPE>
type ErrorConstructorParameters = ConstructorParameters<ErrorConstructor>;

const mtError = new Error('asdasd');

// ReturnTypes <TYPE>
const transformToObj = (a: number, b: number): { a: number, b: number } => ({a,b});

type Transformed = ReturnType<typeof transformToObj>;

// InstanceType <TYPE>
class MyClass {
    a: number;
    b: number;
}

type MyClassAgain = InstanceType<typeof MyClass>
*/
