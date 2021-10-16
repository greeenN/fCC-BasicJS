/*/*/*/*/*/*/*/*34*/

/*var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb ; // Change this line
// Only change code above this line*/

// 35

/*// Only change code below this line
var myArray = ['Hello', 5];*/

// 36

/*// Only change code below this line
var myArray = [['Yo', 7]];*/

// 37

/*var myArray = [50,60,70];
var myData = myArray[0];*/

// 38

/*// Setup
var myArray = [18,64,99];
myArray[0] = 45;
// Only change code below this line*/

// 39

/*var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];*/

// 40

/*// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);*/
// Only change code below this line

// 41

/*// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();*/

// 42

/*// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();*/

// 43

// Setup
/*myArray.shift();
myArray.unshift(["Paul", 35]);*/
// Only change code below this line

// 44

/*var myList = [
  ["Beer", 10],
  ["Pasta", 1],
  ["Vodka", 5],
  ["Meat", 4],
  ["Sushi", 3]
];

// 45

function reusableFunction() {
  console.log("Hi World");
};
reusableFunction();*/


// 46

/*function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

// 47

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
   oopsGlobal = 5;
}*/

// Only change code above this line

/*function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);*/
/*}*/

// 48
/*
function myLocalScope() {
var myVar;
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);*/

// 49

// Setup
/*var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

var outerWear = "sweater";

  // Only change code above this line
  return outerWear;*/
/*}

myOutfit();*/

// 50

/*function timesFive(arg) {
  return arg * 5;
}
var answer = timesFive(5);
*/

// 56

/*function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true"
  } 
  return "No, that was false"


  // Only change code above this line

}*/

// 57

/*// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);*/

// 58

/*// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);*/

// 59

/*// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, 10);*/

// 60

/*// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);*/

// 61

/*// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);*/

// 62

/*function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);*/

// 63

/*function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);*/ 

// 64

/*function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);*/

// 65

/*function testLessOrEqual(val) {
  if (val <= 20) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);*/

// 66

/*function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
    }
  

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);*/

// 67

/*function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);*/