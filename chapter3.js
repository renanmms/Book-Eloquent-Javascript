const hello = function(nome = ""){
    return `Hello World ${nome}`;
}

const printHello = function(){
    console.log(hello("Renan"));   
}

const test = function(){
    return;
}

printHello(); // Hello World Renan

console.log(test()); // undefine;


// Binding and Scope
let x = 10;

if(x >= 10){
    var y = 20;
    console.log(x)
}

console.log(y);

// Example of a nested scope taken from the book 

const hummus = function(factor) {
    let ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
        unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
  
//ingredient(2, "jar", "fruits");
hummus(3);