const basePrices = require('../../basePrices.json');
const discounts = require('../../discounts.json')


function getBasePrice(City: string) {
  return basePrices.find((item: any) => item.city === City).amount;
}

function getBaseDiscount(Birthday: Date) {

  //get the age of customer
  const now = new Date();
  const customerDob = new Date(Birthday);
  const diff = now.getTime() - customerDob.getTime();
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  // Find the discount percentage for the given customer age
  return discounts.find((item: any) => {
    const [min, max] = item.age.split('-').map(Number);
    return age >= min && age <= max;
  }).discount;
}


function calculateInsurance(City: string, Birthday: Date) {

  console.log(City, Birthday)

  const basePrice = getBasePrice(City);
  const discount = getBaseDiscount(Birthday);

  // calcurate the final price
  const discountedPrice = basePrice * (1 - discount / 100);

  return discountedPrice;
}

module.exports = { calculateInsurance, getBasePrice, getBaseDiscount };
