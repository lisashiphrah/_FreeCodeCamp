
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


