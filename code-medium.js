// oblast definice funkcí

// 1) Funkce co vrací string, který odpovídá slovu (jsou oddělena mezerou) ze stringInput na pozici dané wordIndex (od 1), pokud index není vyplněn pracuje se s prvním slovem, vrácené slovo bude pouze malými písmeny s prvním velkým písmenem, pokud slovo na dané pozici neexistuje, vrátí se prázdný string
// například pro "My cat is yellow?" a 3 bude výsledek "Is"
function pascalCaseWord(stringInput, wordIndex) {}

// 2) Funkce co přijme testScore, a vrátí odpovídající známku podle následující tabulky:
// 0-60 -> F, 61-75 -> E, 76-84 -> D, 85-92 -> C, 93-97 -> B, 98-100 -> A, pokud je testScore mimo rozsah 0-100, nebo nevalidní hodnota funkce vrátí "INVALID SCORE"
// například pro 75 bude výsledek "E"
function transformScoreToGrade(testScore) {}

// 3) Funkce na výpočet factorialu, pomocí cyklu, vstupem je factorialNumber, výstupem bude výsledek faktoriálu
// nevalidní vstupem je záporné číslo, nebo nečíslo, v takovém případě funkce vrátí undefined
// faktoriál je součin všech kladných celých čísel menších nebo rovných zadanému číslu; pozor faktoriál čísla 0 je 1
// například pro 5 bude výsledek 120; vzorec: 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(factorialNumber) {}

// oblast volání funkcí

// 1)
const result1 = pascalCaseWord("My cat is yellow?", 3);
console.log(result1);

// 2)
const result2 = transformScoreToGrade(75);
console.log(result2);

// 3)
const result3 = factorial(5);
console.log(result3);

// do kódu níže nezasahujte

module.exports = {
  variant: "3A",
  pascalCaseWord,
  transformScoreToGrade,
  factorial,
};
