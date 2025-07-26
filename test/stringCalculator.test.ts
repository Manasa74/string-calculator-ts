import { addString } from "../src/stringCalculator";

describe("String Calculator", () => {
    test("returns 0 for empty string", () => {
        expect(addString("")).toBe(0);
    });

    test("returns the number itself for single number input", () => {
        expect(addString("1")).toBe(1);
    });

    test("returns sum of two comma-separated numbers", () => {
        expect(addString("1,2")).toBe(3);
    });

    test("supports newlines as delimiter", () => {
        expect(addString("1\n2,3")).toBe(6);
    });
});
