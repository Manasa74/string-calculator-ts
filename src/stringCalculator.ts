export function addString(input: string): number {
    if (!input) return 0;

    let delimiterPattern = /[\n,]/; // Default delimiters: comma and newline
    let numbersPart = input;

    // Check for custom delimiter
    if (input.startsWith("//")) {
        const [delimiterLine, restOfInput] = input.split("\n");
        const customDelimiter = delimiterLine.charAt(2); // safer than [2]
        delimiterPattern = new RegExp(`[${customDelimiter}\n]`);
        numbersPart = restOfInput;
    }

    const numbers = numbersPart
        .split(delimiterPattern)
        .map(str => parseInt(str, 10));

    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numbers.reduce((sum, num) => sum + num, 0);
}
