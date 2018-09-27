/* ***** number ***** */
let num: number = 933;

/* ***** string ***** */
let str: string = "Something is happening here.";

//template strings
let template_str = `
    This is a multiline string expression.
    With embedded variable values as well ${num}
`;
let sentence = `I'll be ${26 + 1} years old next month.`;

/* ***** arrays, there are 2 ways to declare an array in typescript: ***** */
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

/* ***** tuples (aka fixed initial sized heterogoneus collections) ***** */
let tuple1: [string, number];  //an array which can consist of only strings and numbers
tuple1 = ["hello", 10]; //during initialization, only two values can be added
tuple1[2] = 29; //after that, its free to add any more data (but only the of the declared types)
tuple1[4] = "something";
console.log(tuple1);

/* ***** enum ***** */
enum Color { Red, Green, Blue };
let c: Color = Color.Green;

enum ColorStartingWith1 { Red = 1, Green, Blue };
let c1: ColorStartingWith1 = ColorStartingWith1.Blue;

enum ColorWithUniqueNumbers { Red = 4, Green = 7, Blue = 99 };
let c2: ColorWithUniqueNumbers = ColorWithUniqueNumbers.Green;

//how to get an enum's name by its index:
let colorName: string = Color[2];
console.log(colorName);

/* ***** any ***** */
let notSure: any = 4;
notSure = "mabye a string instead";
notSure = false; //okay, definitely a boolean

let listOfAny: any[] = [1, true, "free"];
listOfAny[1] = 100;

/* ****** void ***** */
//commonly used when a function returns nothing
function warnUser(): void {
    console.log("This is my warning message");
}

//this variable can only have undefined or void as a value
let unusableTypedVariable: void = undefined;

/* ***** undefined and null ***** */
let u: undefined = undefined;
let n: null = null;

//basically undefined and null are subtypes of all other types, so they can be added as values to other types like number
let a: number = undefined;

//--strictNullChecks flag prevents the programmer to attach a undefined or null value to any variables except of type void

/* ***** never ***** */
//never is a type for function returns of unreachable code or never returning functions
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed!");
}

function infiniteLoop(): never {
    while (true) {
    }
}

/* ***** Type assertions ***** */
//there are two way of type assertions (aka 'trust me, i know what im doing' kind of convertions (no real conversions will take place, the compiler will believe you that the marked varaiables are truly that kind of type))
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;

//when using JSX only the 'as'-style assertions are allowed