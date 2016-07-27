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
  var arr = [];
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
  return arr;
}


//Search and Replace
function myReplace(str, before, after) {
  if(before[0].toUpperCase() == before[0])
    {
      var arr = after.split('');
      arr[0] = arr[0].toUpperCase();
      after = arr.join('');
    }
  var newString = str.replace(before, after); 
  return newString;
}
myReplace("His name is Tom", "Tom", "john");



//Pig Latin
function translatePigLatin(str) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  if(vowel.indexOf(str[0]) != -1)
    {
      return str + 'way';
    }
  else if(vowel.indexOf(str[1]) != -1)
    {
      return str.substr(1) + str[0] + 'ay';
    }
  else
    {
      var cluster = [];
      var index = 0;
      for(index = 0; index < str.length; index++)
        {
          aux = index;
          
          if(vowel.indexOf(str[index]) == -1)
            {
              cluster[index] = str[index];
              aux = index;
            }
          else
            {
              break;
            }
        }
      return str.substr(index) + cluster.join('') + 'ay';
    }
}
translatePigLatin("glove");



//DNA Pairing
function pairElement(str) {
  var array = [];
  for(var index = 0; index < str.length; index++)
    {
      if(str[index] == 'A')
        {
          array[index] = ['A','T'];
        }
      else if(str[index] == 'T')
        {
          array[index] = ['T','A'];
        }
      else if(str[index] == 'C')
        {
          array[index] = ['C','G'];
        }
      else
        {
          array[index] = ['G','C'];
        }
    }
  return array;
}
pairElement("GCG");
