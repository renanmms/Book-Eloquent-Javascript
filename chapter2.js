// Binding
let caught = 5 * 5;
let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);

mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

var n = "Renan";
const greeting = "Hello ";
console.log(`${greeting}${n}`)

console.log(Math.max(7, 9));

console.log("---- Loops ----");

let even = 1;
while (even < 1000) {
    even += 2;
    console.log(even);
}


do {  
    console.log((even % 3) ? "~" : "^");
    even--;
}while(even >= 0)
