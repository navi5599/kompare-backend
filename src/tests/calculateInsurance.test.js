const { calculateInsurance } = require('../utils/calculateInsurance.ts')
const { getBasePrice } = require('../utils/calculateInsurance.ts')
const { getBaseDiscount } = require('../utils/calculateInsurance.ts')

describe("getBasePrice", () => {
  const zagreb = "Zagreb";
  const unknownCity = "Dubrovnik";

  it("should return the base price for Zagreb", () => {
    expect(getBasePrice(zagreb)).toBe(1000);
  });

  it("should return the base price for other cities", () => {
    expect(getBasePrice(unknownCity)).toBe(700);
  });
});



describe("getBaseDiscount", () => {
  const date = "1980-03-21T00:00:00Z";
  const olderDate = "1900-03-21T00:00:00Z";

  it("should return the amount of discount for given date", () => {
    expect(getBaseDiscount(date)).toBe(2);
  });

  it("should return the amount of discount for given date", () => {
    expect(getBaseDiscount(olderDate)).toBe(0);
  });
});



describe("calculateInsurance", () => {
  const date = "1999-03-21T00:00:00Z";
  const city = "Zadar";

  it("should return the total price with discount for given date and city", () => {
    expect(calculateInsurance(city, date)).toBe(720);
  });
});

