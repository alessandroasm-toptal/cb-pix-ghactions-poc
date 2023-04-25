const { mul, trunc } = require("./main");

it("Should mul correctly", () => {
  expect(mul(3, 4)).toBe(12);
});

it("Should trunc correctly", () => {
  expect(trunc(3.14)).toBe(3);
});
