// Order of precedence
console.log("----- Arithmetic -----");
console.log(100+4*11);
console.log((100+4)*11);

console.log(314 % 100);
console.log(144 % (12 + 1));

console.log("----- Numbers -----");
console.log(typeof(2));
let isInt = Number.isInteger(Number.MAX_VALUE)
console.log(Infinity);

console.log("----- Strings -----");
console.log("Down on the sea ");
console.log('Lie on the Ocean');
console.log(`Float on the ocean`)

console.log("----- Escaping characters -----");
console.log("");

// Newline escaping character
console.log("\n");

// Backslash escaping character
console.log("\t");

console.log("This is the first line\nAnd this is the second")

// Printing the backslash instead of the special character
console.log("\\o/");

console.log("A newline character is written like \"\\n\".");

// Concatenation 
console.log("con" + "cat" + "e" + "nate");
console.log("Re" + "nan");

// Template literals
console.log(`half of 100 is ${100 / 2}`);

console.log("---- Unary operators ----");
console.log(typeof(Math.PI));
console.log(typeof(`The number of PI is ${Math.PI}`));

// The minus operator can be used as unary and binary operator
console.log(- (10 - 2));

console.log("---- Boolean ----");
// Comparison operators
console.log(0xff > 0xfe); 
console.log(0xff < 0xfe); 

console.log("Palavra1" >  "Palavra2");
console.log("Itchy" != "Scratchy");
console.log("Orange " == "Orange");

// NaN is not equal to itself
console.log(NaN == NaN)

console.log("---- Logical Operators ----");
console.log(`true && false = ${true && false}`);
console.log(`true && true = ${true && true}`);
console.log(`false || false = ${false || false}`);
console.log(`true || false = ${true || false}`);
console.log(`!true = ${!true}`);
console.log(`!(false || false) = ${!(false || false)}`);

// Mixing arithmetic and logical operators
console.log(`1 + 1 == 2 && 10 * 10 > 50 = ${1 + 1 == 2 && 10 * 10 > 50}`);

console.log("\n--- Ternary Operator ---");
let year = 2022;
// Ternary operators operate with three values
console.log(year % 2 == 0 ? `${year} is even` : `${year} is odd`);

console.log();
console.log("---- Empty Values ----");
console.log(`${null} and ${undefined} is used to denote the absence of meaningful value`);

console.log("---- Automatic Type Conversion ----");
// Type coercion
console.log(8 * null);
console.log("5" - 1);
console.log("5" / 2);
console.log("5" + 1);
console.log("five" * 2);
console.log(false == 0);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);

console.log("---- Short-Circuiting of Logical Operators ----");

// JS convert the value of its left to boolean, to decide what to do
console.log(`null || \"user\" = ${null || "user"}`);
console.log(`undefined || \"user\" = ${undefined || "user"}`);
console.log(`\"Agnes\" || \"user\" = ${"Agnes" || "user"}`);