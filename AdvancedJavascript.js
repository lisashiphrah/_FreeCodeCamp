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


//Exact Change

function checkCashRegister(price, cash, cid) {
    cash = cash * 100;
    price = price * 100;
 
    var change = cash - price;
    var changeLeft = change;
 
    var totalCid = getTotalCid(cid);
    var result =[];
 
    if (change > totalCid) {
        return 'Insufficient Funds';
    } else if (change === totalCid) {
        return 'Closed';
    }
 
    for (var i = cid.length - 1; i >= 0; i--) {
        var coinName = cid[i][0],
            coinTotal = cid[i][1] * 100,
            coinValue = getValue(coinName),
            coinAmount = coinTotal / coinValue,
            toReturn = 0;
 
        while (changeLeft >= coinValue && coinAmount > 0) {
            changeLeft -= coinValue;            
            coinAmount--;
            toReturn++;
            console.log(changeLeft);
        }
 
        
        if (toReturn > 0) {
            result.push([coinName, toReturn * (coinValue / 100)]);
        }
    }
 
    if (getTotalCid(result) != change) {
        return 'Insufficient Funds';           
    }
 
    return result; 
 
 
    function getTotalCid(cid) {
        var total = 0;
        
        return total;
    }
 
    function getValue(coinOrBill) {
        switch (coinOrBill) {
            case 'PENNY':
                return 1;
            case 'NICKEL':
                return 5;
            case 'DIME':
                return 10;
            case 'QUARTER':
                return 25;
            case 'ONE':
                return 100;
            case 'FIVE':
                return 500;
            case 'TEN':
                return 1000;
            case 'TWENTY':
                return 2000;
            case 'ONE HUNDRED':
                return 10000;
        }
    }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
