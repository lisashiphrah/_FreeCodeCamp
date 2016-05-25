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