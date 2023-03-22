"use strict";
var basePrices = require('../../basePrices.json');
var discounts = require('../../discounts.json');
function getBasePrice(City) {
    return basePrices.find(function (item) { return item.city === City; }).amount;
}
function getBaseDiscount(Birthday) {
    //get the age of customer
    var now = new Date();
    var customerDob = new Date(Birthday);
    var diff = now.getTime() - customerDob.getTime();
    var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    // Find the discount percentage for the given customer age
    return discounts.find(function (item) {
        var _a = item.age.split('-').map(Number), min = _a[0], max = _a[1];
        return age >= min && age <= max;
    }).discount;
}
function calculateInsurance(City, Birthday) {
    console.log(City, Birthday);
    var basePrice = getBasePrice(City);
    var discount = getBaseDiscount(Birthday);
    // calcurate the final price
    var discountedPrice = basePrice * (1 - discount / 100);
    return discountedPrice;
}
module.exports = { calculateInsurance: calculateInsurance, getBasePrice: getBasePrice, getBaseDiscount: getBaseDiscount };
