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

    test("supports custom delimiter", () => {
        expect(addString("//;\n1;2")).toBe(3);
    });

    test("throws error when negative numbers are provided", () => {
        expect(() => addString("1,-2,-5,3")).toThrow("negative numbers not allowed: -2, -5");
    });

    test("ignores numbers greater than 1000", () => {
        expect(addString("2,1001")).toBe(2);
    });

    test("supports delimiters of any length in format //[delimiter]\\n", () => {
        expect(addString("//[***]\n1***2***3")).toBe(6);
    });
});
