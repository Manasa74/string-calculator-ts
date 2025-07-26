export function addString(input: string): number {
    if (!input) return 0;

    let delimiterPattern = /[\n,]/; // Default delimiters: comma and newline
    let numbersInput = input;

    // Check for custom delimiter
    if (input.startsWith("//")) {
        const [delimiterPart, numbersPart] = input.split("\n");
        numbersInput = numbersPart;

        const delimiterMatches = [...delimiterPart.matchAll(/\[(.+?)\]/g)];
        if (delimiterMatches.length > 0) {
            // Escape RegExp special characters inside delimiter
            const escapedDelimiters = delimiterMatches.map(match =>
                match[1].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
            );
            delimiterPattern = new RegExp(escapedDelimiters.join("|"));
        } else {
            const customDelimiter = delimiterPart.charAt(2);
            delimiterPattern = new RegExp(`[${customDelimiter}\n]`);
        }
    }

    const numbers = numbersInput
        .split(delimiterPattern)
        .map(str => parseInt(str, 10));

    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numbers
        .filter(num => num <= 1000)
        .reduce((sum, num) => sum + num, 0);
}
