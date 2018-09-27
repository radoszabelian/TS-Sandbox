//number
var num = 933;
//string
var str = "Something is happening here.";
//template strings
var template_str = "\n    This is a multiline string expression.\n    With embedded variable values as well " + num + "\n";
var sentence = "I'll be " + (26 + 1) + " years old next month.";
//arrays, there are 2 ways to declare an array in typescript: 
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//tuples (aka heterogoneus collections)
var tuple1; //an array which can consist of only strings and numbers
tuple1 = ["hello", 10]; //during initialization, only two values can be added
tuple1[2] = 29; //after that, its free to add any more data (but only the of the declared types)
tuple1[4] = "something";
console.log(tuple1);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var ColorStartingWith1;
(function (ColorStartingWith1) {
    ColorStartingWith1[ColorStartingWith1["Red"] = 1] = "Red";
    ColorStartingWith1[ColorStartingWith1["Green"] = 2] = "Green";
    ColorStartingWith1[ColorStartingWith1["Blue"] = 3] = "Blue";
})(ColorStartingWith1 || (ColorStartingWith1 = {}));
;
var c1 = ColorStartingWith1.Blue;
var ColorWithUniqueNumbers;
(function (ColorWithUniqueNumbers) {
    ColorWithUniqueNumbers[ColorWithUniqueNumbers["Red"] = 4] = "Red";
    ColorWithUniqueNumbers[ColorWithUniqueNumbers["Green"] = 7] = "Green";
    ColorWithUniqueNumbers[ColorWithUniqueNumbers["Blue"] = 99] = "Blue";
})(ColorWithUniqueNumbers || (ColorWithUniqueNumbers = {}));
;
var c2 = ColorWithUniqueNumbers.Green;
//how to get an enum's name by its index:
var colorName = Color[2];
console.log(colorName);
