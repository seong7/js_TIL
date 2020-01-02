/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

/**
 *  bill 1 = 124
 *  bill 2 = 48
 *  bill 3 = 268
 * 
 *  bill < 50 20%
 *  50 <= bill <= 200  15%
 *  bill > 200 10% 
 * 
 * return should be : 
 *  1. 3 tips
 *  2. 3 final paid amounts
 * 
 */


function getTips(bills){
    var tips = [];

    for(var i = 0; i<bills.length; i++){
        var bill = bills[i];

        tips.push(getTip(bill));
    }

    return tips;
}


function getPaidAmounts(bills){
    var paidAmounts = [];

    for(var i = 0; i<bills.length; i++){
        var bill = bills[i];

        paidAmounts.push(getPaidAmount(bill));
    }

    return paidAmounts;
}

function getPaidAmount(bill){

    var amount = bill + getTip(bill);

    return amount;
}


function getTip(bill){
    
    var tip = bill*getTipRate(bill);

    return tip;
}


function getTipRate(bill){
    var tipRate = 0;

    if(bill < 50){
        tipRate = 0.2;
    } else if(bill >= 50 && bill <= 200){
        tipRate = 0.15;
    } else {
        tipRate = 0.1;
    }

    return tipRate;
}

var bills = [124, 48, 268];

console.log(getPaidAmounts(bills), getTips(bills));


// lecturer's
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);
*/