//Validate US Telephone Numbers
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

//Symmetric Difference
function sym(args) {
  var args = Array.prototype.slice.call(arguments);
  var getDiff = function(arr1, arr2) {

    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter(function(item, idx, arr) {
        return arr.indexOf(item) === idx;
      });
  };

  return args.reduce(getDiff, []);
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])