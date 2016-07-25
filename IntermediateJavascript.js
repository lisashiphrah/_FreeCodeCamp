
//Sum all
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  
  var result = 0;
  
  for(var i = min; i <= max; i++)
    {
      result = result + i;
    }
  
  return result;
}

sumAll([1, 4]);



//Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  var element = 0;
 
  for(var index = 0; index < arr1.length; index++)
    {
      element = arr1[index];
      if(arr2.indexOf(element) == -1)
        {
          newArr.push(element);
        }
    }
  
  for(var index2 = 0; index2 < arr2.length; index2++)
    {
      element = arr2[index2];
      if(arr1.indexOf(element) == -1)
        {
          newArr.push(element);
        }
    }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//Roman Numeral Converter
function convertToRoman(num) {
  var decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var romanConverted = [];
  
  for(var index = 0; index < decimalArray.length; index++)
    {
      while(decimalArray[index] <= num)
        {
          num = num - decimalArray[index];
          romanConverted.push(romanArray[index]);
        }
    }
 return romanConverted.join('');
}

convertToRoman(36);


//Wherefore art thou
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for(var index = 0; index < collection.length; index++)
    {
        var obj = collection[index];
        var found = true;
      
        for(var prop in source)
        {
          if(source[prop] != obj[prop])
            {
              found = false;
            }
        }
        if(found)
        {
            arr.push(collection[index]);
        }
    }
  // Only change code above this line
  return arr;
}


