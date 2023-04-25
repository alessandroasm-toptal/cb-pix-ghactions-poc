const { add } = require("./main");

it("Should add correctly", () => {
  expect(add(3, 4)).toBe(7);
});

it("Should add a negative number correctly", () => {
  expect(add(4, -3)).toBe(1);
});
