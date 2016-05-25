//Declare JavaScript Objects as Variables
var motorBike = {
  "wheels":2,
  "engines":1,
  "seats":2
  // Only change code below this line.
};


//Construct JavaScript Objects with Functions
var MotorBike = function() {
  this.engines = 1;
  this.wheels = 2;
  this.seats = 1;
};


//Make Instances of Objects with a Constructor Function
var myCar = new Car();
myCar.nickname = "";


//Make Unique Objects by Passing Parameters to our Constructor
var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

var myCar = new Car(6, 3, 1);



//Make Object Properties Private
var Bike = function() {

  // Only change code below this line.
  var gear = 1;
  
  this.getGear = function() {
    return gear;
  };
  
  this.setGear = function (gearValue) {
    gear = gearValue
  }
};


//Iterate over Arrays with map
var newArray = oldArray.map(function(val){
  return val + 3;
});


//Condense arrays with reduce
singleVal = array.reduce(function(previousVal, currentVal){
  return previousVal + currentVal;
});


//Filter Arrays with filter
var newArray = oldArray.filter(function(val) {
  return val < 6;
});


//Sort Arrays with sort
array.sort(function(a, b) {
  return a < b;
});


//Reverse Arrays with reverse
newArray = array.reverse();


//Concatenate Arrays with concat
newArray = oldArray.concat(concatMe);


//Split Strings with split
array = string.split(' ');


//Join Strings with join
joinedString = joinMe.join(' ');


//Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

//Factorialize a Number
function factorialize(num) {
  var i = 1;
  var index = 1;
  while(index <= num) {
    i = i * index;
    index++;
  }
  return i;
}


//Check for Palindromes
function palindrome(str) {

  var str1 = str.toLowerCase().replace(/\W|_/g, '');
  var str2 = str1.split('').reverse().join('');

  if(str2 === str1) {
    return true;
  } 
  return false;
}


//Find the Longest Word in a String
function findLongestWord(str) {
  var array = str.split(' ');
  var x = 0;
  for(var i = 0; i < array.length; i++){
    if(x < array[i].length){
      x = array[i].length;
    }
  }
  return x;
}