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

// 68

/*function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);*/

// 69

/*function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  } else {

  return "Between 5 and 10";
  }
}

testElseIf(7);*/

// 70

/*function orderMyLogic(val) {
   if (val < 5) {
    return "Less than 5";
  } if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);*/

// 71

/*function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return "Tiny";
} else if (num < 10) {
  return "Small";
} else if (num < 15) {
  return "Medium";
} else if (num < 20) {
  return "Large";
} else if (num >= 20) {
  return "Huge";
} else {
  return "Change Me";
}
  // Only change code above this line
}

testSize(7);*/

// 72 

/*var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if ( strokes == 1) {
  return names[0];
} else if ( strokes <= par - 2) {
  return names[1];
} else if ( strokes == par - 1) {
  return names[2];
} else if ( strokes == par) {
  return names[3];
} else if ( strokes == par + 1) {
  return names[4];
} else if ( strokes == par + 2) {
  return names[5];
} else if ( strokes >= par + 3) {
  return names[6];
} else {
  return "Change Me";
}
  // Only change code above this line
}

golfScore(5, 4);*/


// 73

/*function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}


  // Only change code above this line
  return answer;
}

caseInSwitch(1);*/

// 74

/*function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);*/

// 75

/*function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);*/

// 76

/*function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);*/

// 77

/*function isLess(a, b) {
  // Only change code below this line
  return a < b;
  
  // Only change code above this line
}

isLess(10, 15);*/

// 78

// Setup
/*function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0) {
  return undefined;
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);*/

// 79

/*var myDog = {
// Only change code below this line
  name: 'Doggy',
  legs: 4,
  tails: 1,
  friends: ['Catty', 'Mousy']

// Only change code above this line
};*/

// 80

// Setup
/*var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line*/

// 81

// Setup
/*var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj['an entree'];   // Change this line
var drinkValue = testObj['the drink'];    // Change this line*/

// 82

// Setup
/*var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

// Only change code below this line*/

// 83

/*var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = 'gav-gav';*/

// 84

/*// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;

// Only change code below this line*/

// 85

/*function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));*/

// 86

/*var count = 0;

function cc(card) {
  // Only change code below this line
switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}

var holdbet = "Hold";
if (count > 0) {
  holdbet = "Bet";
}

  return count + " " + holdbet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');*/

// 87

// Setup
/*var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line*/

// 88

// Setup
/*function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");*/

// 89

/*function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found"
  }
  
  // Only change code above this line
}*/


// 90

/*var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "SIDxRAM",
    "title": "Jean Grey",
    "release_year": 2016,
    "formats": [
      "MP3",
      "MP4",
      "DVD"
    ]

  }
];
*/

// 91

/*var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];*/

// 92 

/*var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];*/

// 93

// Setup
/*var myArray = [];
var i = 5;

while(i >= 0) {
  myArray.push(i);
  i--;
}*/

// Only change code below this line

// 94

// Setup
/*var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}*/
// Only change code below this line

// 95

// Setup
/*var myArray = [];
for(var i = 1; i <= 9; i += 2) {
  myArray.push(i);
}*/
// Only change code below this line

// 96

// Setup
/*var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}*/
// Only change code below this line