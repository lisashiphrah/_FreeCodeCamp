//Profile Lookup
function lookUpProfile(firstName, prop){
// Only change code below this line
  for(var i=0; i < contacts.length; i++)
  {
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



//Generate Random Fractions with JavaScript
function randomFraction() {
  // Only change code below this line.
  return Math.random();
  // Only change code above this line.
}



//Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random() * 10);
}




//Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}



//Sift through Text with Regular Expressions
// Only change code below this line.
 var expression = /and/gi;
// Only change code above this line



//Find Numbers with Regular Expressions