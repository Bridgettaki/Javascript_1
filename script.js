//Delcaring the variables into int
let intNum = 18;
let floatNum = 2.5;

//Arithmetic operators
let num = 2;
let addition = intNum + num;
let division = intNum / num;
let subtraction = intNum - num;
let multiplication = intNum * num;

//Console.log. print the answers
console.log("Integer Number:", intNum);
console.log("Addition", addition);
console.log("Division", division);
console.log("Subtraction", subtraction);
console.log("Multiplication", multiplication);
console.log("FloatNumber", floatNum);

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Exercize 2
let greaterThan = intNum > floatNum;
let equalsTo = intNum == floatNum;
let smallerThan = intNum < floatNum;

console.log("Greater than", greaterThan);
console.log("Equals to", equalsTo);
 
let x = 7, y = 14;
console.log("x > y:", x > y);
console.log("x <= y:", x <= y);
console.log("x == y:", x == y);
console.log("x != y:", x != y);
//Introduction to boolean
let a = true, b = false;
console.log("a && b:", a && b);
console.log("!a:", !a);

let p = 20;
p += 10;
console.log("p += 10", p);
p += 5;
console.log("p -= 5", p);
p += 2;
console.log("p *= 2", p);
p += 14;
console.log("p %= 14", p);

////////////////////////////////////////////////////////////////////////////
//Exercize 3
let temp = 20;
if ( temp < 0) console.log("It is extremly cold");
else if( temp <= 15) console.log("Its cold");
else if(temp <= 25) console.log("it is mild");
else console.log("It is warm");
