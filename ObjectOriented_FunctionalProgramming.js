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


//Title Case a Sentence
function titleCase(str) {  
  str = str.toLowerCase().split(' ');

  for(var i = 0; i < str.length; i++){
    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase(); 
    str[i] = str[i].join('');
  }
  return str.join(' ');
}


//Return Largest Numbers in Arrays
function largestOfFour(arr) {  
  var largest = [0, 0, 0, 0];  
  for(var i = 0; i < arr.length; i++)
  { 
    for(var j = 0; j < arr[i].length; j++)
    { 
      if(largest[i] < arr[i][j])
      {  
        largest[i] = arr[i][j];  
      } 
    }
  }
  return largest;
}

//Confirm the Ending
function confirmEnding(str, target) {  
  var size = target.length;

  if(str.substr(-size) === target)
  {
    return true;
  }
    return false;
}

//Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  if(num === 0)
  {
      return str;
    } 
  else if(num > 0)
  {
      var newStr = "";
      for(var i = 0; i < num; i++)
      {
        newStr += str;
      }
    return newStr;
  } 
    return "";
}

//Truncate a string
function truncateString(str, num) {
  var ending = "...";
  if (str.length > num)
  {
    if (num > 3 )
    {
    	str = str.slice(0,num-3);
    	return str + ending;
    }
    else
    {
      str = str.slice(0,num);
      return str + ending;
    }
  }
  return str;
}


//Chunky Monkey
function chunkArrayInGroups(arr, size) {  
  var array = [];
  var i = 0;
  while (i < arr.length)
  {
    array.push(arr.slice(i, i += size));
  }
  return array;
}


//Slasher Flick
function slasher(arr, howMany) {  
  arr.splice(0,howMany);
  return arr;
}


//Mutations
function mutation(arr) {  
  var a = arr[0].toLowerCase();
  var b = arr[1].toLowerCase();

  for(var i = 0; i < b.length; i++)
  {
    var x = a.indexOf(b[i]);
    if (x === -1)
    {
      return false;
    }
  }
  return true;
}


