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


//Missing letters
function fearNotLetter(str) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p','q','r','s','t','u','v','w','x','y','z'];
  
  var indexFirst = alphabet.indexOf(str[0]);
  for(var index = 0; index < str.length; index++)
    {
      if(str[index] != alphabet[indexFirst + index])
        {
          return alphabet[indexFirst + index];
        }
    }
  return undefined; 
}

fearNotLetter("abce");



//Boo who
function booWho(bool) {
  if(bool === true || bool === false)
    return true;
  return false;
}
booWho(null);



//Sorted Union
function uniteUnique(arr) {
  var result = [];
  for(var index = 0; index < arguments.length; index++)
    {
      for(var index2 = 0; index2 < arguments[index].length; index2++)
        {
          if(result.indexOf(arguments[index][index2]) == -1)
            {
              result.push(arguments[index][index2]);
            }
        }
    }
  return result;
}


//Convert HTML Entities
function convertHTML(str) {
  str = str.split('&').join('&amp;');
  str = str.split('<').join('&lt;');
  str = str.split('>').join('&gt;');
  str = str.split('\"').join('&quot;');
  str = str.split("\'").join('&apos;');
  return str;
}
convertHTML('Stuff in "quotation marks"');



//Spinal Tap Case
function spinalCase(str) { 
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.replace(/\s+|_+/g, '-').toLowerCase();
  return str;
}
spinalCase("thisIsSpinalTap");



//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  var sum = 0;
  var returnSum = 0;
  var index = 1;
  var previous = 0;
  while(index <= num)
    {
      if(index % 2 !== 0)
        {
          returnSum = returnSum + index;
        }
      sum = sum + index;    
      index = index + previous;
      previous = index - previous;
    }
  return returnSum;
}
sumFibs(4);



//Sum All Primes
function sumPrimes(num) {
  var array = [];
  var primeSum = 0;
  
  for(var index = 2; index <= num; index++)
    {
      var isPrime = true;
      for(var index2 = 0; index2 < array.length; index2++)
        {
          if(index % array[index2] === 0)
            {
              isPrime = false;
              break;
            }
        }
      if(isPrime)
        {
          primeSum += index;
        }
      array.push(index);
    }
  return primeSum;
}

sumPrimes(10);



//Smallest Common Multiple
function smallestCommons(arr) {
  var quot = 0;
  var loop = 1;
  var n;
  
  arr.sort(function(a, b) {
    return b - a;
  });

  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }
  
  while (n !== newArr.length) {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  }
 
  return quot;
}


//Finders Keepers
function findElement(arr, func) {
  var newArray = arr.filter(func);
  return newArray[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


//Drop it
function dropElements(arr, func) {
  var newArray = arr.filter(func);
  var returnArray = [];
  var index = 0; 
  while(true)
    {
      if(arr[index] != newArray[0])
        {
          arr.shift();
        }
      else
        {
          break;
        }
    }
  return arr;
}
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})



//Steamroller
function steamrollArray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}
// test here
steamrollArray([1, [2], [3, [[4]]]]);



//Binary Agents
function binaryAgent(str) {
  var binaryArray = str.split(' ');
  var result = [];
  for(var index = 0; index < binaryArray.length; index++)
    {
      var value = String.fromCharCode(parseInt(binaryArray[index], 2));
      result.push(value);
    }
  return result.join('');
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



//Everything Be True
function truthCheck(collection, pre) {
  for(var index = 0; index < collection.length; index++)
    {
      var element = collection[index];
    
      if(!element[pre])
        {
          return false;
        }
    }
  return true;
}