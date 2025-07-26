# String Calculator – TDD Kata (TypeScript)

This project is a solution to the **String Calculator TDD Kata**, implemented in **TypeScript** using **Jest** for testing. The goal is to apply **Test-Driven Development (TDD)** practices to incrementally build and test a simple string calculator function.

---

## Requirements Covered

- Return 0 for an empty string
- Return the number for a single value
- Return the sum for two comma-separated numbers
- Support newlines (`\n`) as valid delimiters
- Support custom single-character delimiters (e.g. `"//;\n1;2"` → `3`)
- Throw an error for negative numbers, listing all negatives found.
- Ignore numbers greater than 1000 (e.g. `"2,1001"` → `2`)
- Support delimiters of any length (e.g. `"//[***]\n1***2***3"` → `6`)
- Support multiple delimiters (e.g. `"//[*][%]\n1*2%3"` → `6`)

## Tech Stack

- Language: TypeScript
- Test Framework: Jest
- Package Manager: npm

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Manasa74/string-calculator-ts.git
cd string-calculator-ts
```

### 2. Install dependencies

```
npm install
```

### 3. Run tests

```
npm install
```

## Example usage

You can use the addString function to sum numbers from a formatted string:

```
import { addString } from "./src/stringCalculator";

// Empty string
console.log(addString(""));             // Output: 0

// Single number
console.log(addString("5"));            // Output: 5

// Comma-separated numbers
console.log(addString("1,2"));          // Output: 3

// Newlines as delimiters
console.log(addString("1\n2,3"));       // Output: 6

// Custom delimiter (semicolon)
console.log(addString("//;\n1;2"));     // Output: 3

// Negative numbers (throws error)
console.log(addString("1,-2,3"));       // Throws: Error: negative numbers not allowed: -2

// Ignore numbers > 1000
console.log(addString("2,1001"));       // Output: 2

// Delimiter of any length
console.log(addString("//[***]\n1***2***3")); // Output: 6

// Multiple delimiters
console.log(addString("//[*][%]\n1*2%3"));    // Output: 6
```

## Test Coverage

The project includes test cases for:
- Empty input
- Single numbers
- Comma and newline delimiters
- Custom delimiters (e.g., //;\n1;2)
- Handling of negative numbers with descriptive errors
- Numbers greater than 1000 are ignored
- Delimiters of any length (e.g., //[***])
- Multiple delimiters (e.g., //[*][%])

##  Tech Stack

- Language: TypeScript
- Testing Framework: Jest
- Package Manager: npm

## References

- [Jest Documentation](https://jestjs.io/)
- [Typescript Docs](https://www.typescriptlang.org/)
