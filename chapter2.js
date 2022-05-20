// Binding
// let caught = 5 * 5;
// let ten = 10;
// console.log(ten * ten);

// let mood = "light";
// console.log(mood);

// mood = "dark";
// console.log(mood);

// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);

// var n = "Renan";
// const greeting = "Hello ";
// console.log(`${greeting}${n}`)

// console.log(Math.max(7, 9));

// console.log("---- Loops ----");

// let even = 1;
// while (even < 1000) {
//     even += 2;
//     console.log(even);
// }


// // do {  
// //     console.log((even % 3) ? "~" : "^");
// //     even--;
// // }while(even >= 0)

// let isNotNumber = Number.isNaN(undefined || NaN);

// console.log(isNotNumber);

// This is a single line comment

/**
 * 
 * This is a multi line comment
 */

// Looping a triangle

// Solution 1
var arrayOfHashtags = "#######"

for(let i = 0; i <= arrayOfHashtags.length ; i++){
    console.log(arrayOfHashtags.substring(0,i));
}

// Solution 2
arrayOfHashtags = "#"
for(let i = 0; i < 7; i++){
    console.log(arrayOfHashtags);
    arrayOfHashtags += "#";
}

// FizzBuzz

for(let i = 1; i < 101; i++)
{
    if(i % 3 == 0){
        console.log("Fizz");
    }
    if(i % 5 == 0){
        console.log("Buzz");
    }
    if(i % 5 == 0 && i % 3 == 0){
        console.log("FizzBuzz");
    }
}

// Chessboard

for(let i = 1; i <= 8; i++){
    console.log((i%2) ? " # # # #": "# # # #");
}
