// oblast definice funkcí

// 1) Funkce co vrací boolean hodnotu zda arrayInput, obsahuje v sobě stringToFind
function contains(arrayInput, stringToFind) {return arrayInput.includes(stringToFind);}

// 2) Funkce co vrací délku string řetězce poskytnutého ve stringInput
function size(stringInput) {return stringInput.length;}

// 3) Funkce co vrací bool hodnotu co je OR mezi booleanInput1, booleanInput2 a booleanInput3
function orMe(booleanInput1, booleanInput2, booleanInput3) {}

// 4) Funkce co spojí dva textové řetězce string1 a string2 a vloží mezi ně znak ' ' (mezera) vrátí je jako jeden string
// například pro "Hello", "World" bude výsledek "Hello World"
function join(string1, string2) {return string1 + ' ' + string2;}

// 5) Funkce co vrací hodnotu z pole arrayInput na indexu indexInput (od 0)
// například pro ["apple", "banana", "kiwi", "orange", "strawberry"], 2 bude výsledek "kiwi"
function get(arrayInput, indexInput) {return arrayInput[indexInput];}

// oblast volání funkcí
const fruits = ["apple", "banana", "kiwi", "orange", "strawberry"];
const fruits = new Array("apple", "banana", "kiwi", "orange", "strawberry");

// 1)
const result1 = contains(fruits, "banana");
console.log(result1);

// 2)
const result2 = size("I love learning!");
console.log(result2);

// 3)
const result3 = orMe(true, false, false);
console.log(result3);

// 4)
const result4 = join("Hello", "World");
console.log(result4);

// 5)
const result5 = get(fruits, 2);
console.log(result5);

// do kódu níže nezasahujte

module.exports = {
  variant: "3A",
  contains,
  size,
  orMe,
  join,
  get,
};
