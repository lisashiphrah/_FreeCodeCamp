///////////////////////////////////////////////////////////////////
//Profile Lookup
///////////////////////////////////////////////////////////////////
function lookUpProfile(firstName, prop){
// Only change code below this line
  for(var i=0; i < contacts.length; i++) {
    if(contacts[i].firstName === firstName)
    {
      if(contacts[i].hasOwnProperty(prop))
      {
        return contacts[i][prop];
      }
      else
      {
        return "No such property";
      }
    }
}
return "No such contact";
// Only change code above this line
}


///////////////////////////////////////////////////////////////////
//Generate Random Fractions with JavaScript
///////////////////////////////////////////////////////////////////
function randomFraction() {
  // Only change code below this line.
  return Math.random();
  // Only change code above this line.
}


//////////////////////////////////////////////////////////////////
//Generate Random Whole Numbers with JavaScript
//////////////////////////////////////////////////////////////////
function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random() * 10);
}



//////////////////////////////////////////////////////////////////
//Generate Random Whole Numbers within a Range
//////////////////////////////////////////////////////////////////
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}


//////////////////////////////////////////////////////////////////
//Sift through Text with Regular Expressions
//////////////////////////////////////////////////////////////////
// Only change code below this line.
 var expression = /and/gi;
// Only change code above this line



//Find Numbers with Regular Expressions
var expression = /\d+/gi;


//Find White Space with Regular Expressions
var expression = /\s+/gi;


//Invert Regular Expression Matches with JavaScript
var expression = /\S/gi;

///////////////////////////////////////////////////////////////////
//Understanding Undefined Value returned from a Function
///////////////////////////////////////////////////////////////////

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();


///////////////////////////////////////////////////////////////////
//Practice comparing different values
///////////////////////////////////////////////////////////////////
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");


///////////////////////////////////////////////////////////////////
//Iterate with JavaScript Do...While Loopses
///////////////////////////////////////////////////////////////////
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

do {
  myArray.push(i);
  i++;
} while (i < 5);

///////////////////////////////////////////////////////////////////
//Use the parseInt Function
///////////////////////////////////////////////////////////////////
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

///////////////////////////////////////////////////////////////////
//Use the parseInt Function with a Radix
///////////////////////////////////////////////////////////////////
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
