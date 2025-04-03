/* This is a MULTI-LINE COMENT
the code below is an example STATEMENT (instruction/command) Every STATEMENT ends in a SEMICOLON(;) */

console.log("welcome to JavaScript");


// This is a SINGLE-LINE COMMENT

// console.log() is a FUNCTION that displays info

console.log("My name is Sohaila");

// DECLARE a new VARIABLE to hold some date 
let pokemon;

// ASSING a VALUE to that variable 
// like putting an item in a box 
pokemon = "pikachu";

// DECLARE + ASSING in one statement 
let luckyNumber = 6;

//"PASS IN" a variable to FUNCTION 
console.log(luckyNumber);

// CHANGE the value of an existing variable 
let raining = false;
console.log(raining);
raining = true;
console.log(raining);

// COPY data from one variable into another 
let breakfast = "cerelac"
let lunch;
lunch = breakfast
// Both variables hold the same value
console.log(breakfast)
console.timeLog(lunch)
// Above statements log the VALUES stored in VARIABLES named breakfast and lunch 
// Below statement log the literal string "lunch"
console.log("lunch");

// MATH OPERATORS
let score = 0;
score = score + 5;
console.log(score);
score = score - 10;
console.log(score);
score = score * (-3);
console.log(score);
score = score / 5;
console.log(score);

// Can combine multiple operators in one statement
// Order of evaluation follows PEMDAS!
score = score / 6 - 3 ** (2 + 4) * 10 ;
console.log(score)

// STRING CONCATENATION (merging/comnining)
// QUOTES indicate STRING LITERALS
let greeting = "Hi " + "friend, I am so happy to see you";
console.log(greeting);

// Can combine string VARIABLES with string LITERALS 
let username = "star-violin123"
greeting = "welcome " + username + "!!!";
console.log(greeting);

//  Watch out for STRING CONVERSIONS
console.log(4 + 5); // 9 (adds the numbers)
console.log("4" + 5); // 45 (concatenate, not add)
console.log(4 + '5'); // 45 (same as above!)

// SHORTCUT OPERATORS (Increment/Decrement)
let counter = 0;
counter = counter + 1; // LONG WAY
counter++; // SHORTCUT to increase by 1
console.log(counter);
counter--; // SHORTCUT to decrease by 1 
console.log(counter);

/* FUNCTIONS:
   Reusable sets of code statements that perform a specific task or process
*/

 
// console.log is a FUNCTION that we've used
// TASK: display data in the console
console.log("I just used a function!")

//DECLARE (create) your own function
function skincare() {
    // STATEMENTS (actions) to execute for this routine 
    console.log("1.Cleanse");
    console.log("2. Apply toner");
    console.log("3. Moisturize");
}
// CALL the function to use it!
skincare();
skincare(); // can run the function again

// ANALOGY: Function are like RECIPES
// Example of a function that needs PARAMETERS (ingredients) and RETURNS a new value (meal)
function makeSandwich(filling, sauce, bread) {
    let sandwich = filling + " sandwich with" + sauce + " on " + bread;
    return sandwich; // OUTPUT
}
let grilledCheese = makeSandwich("cheese","butter","toast");
console.log(grilledCheese);
let Sohaila = makeSandwich("turkey", "ketchup", "pita");
console.log(Sohaila);
 let simeon = makeSandwich("jelly", "butter", "multigrain");
 console.log(simeon);

 //*** Selection (CONDITIONALS) ***
 // A conditional expression is like a QUESTION
 // that has boolean (true/fales) ANSWER

 console.log("Conditionals:");
 console.log( 4 > 5 ); // 4 > 5 eveluates to FALSE
 console.log("Is 10 less than 2?");
 console.log( 10 < 2 );
 console.log( 2 == 2 );
 console.log( 3 != 2 );
 console.log( 3 != 3);

 // Strings can also be compared by dictionary order
 // Each letter/character has a numerical value (A is 1, B is 2...)
 console.log( "Kyanni" >= "Ayesha" ); // true
 console.log( "Z" < "A" ); // false
 console.log( "Katerina" == "Katherine" );

 // Can use comparison operators btwn VARIABLES and VALUES
 let myNickname = "So So";
 console.log( myNickname == "Sohi")
