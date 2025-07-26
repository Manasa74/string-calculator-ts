import { addString } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(addString("")).toBe(0);
  });
});
