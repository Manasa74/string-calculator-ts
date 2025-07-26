export function addString(input: string): number {
  if (input === "") return 0;

  let delimiterPattern = /[\n,]/; // default delimiters
  let numbersPart = input;

  if (input.startsWith("//")) {
    const parts = input.split("\n");
    const customDelimiter = parts[0][2];
    delimiterPattern = new RegExp(`[${customDelimiter}\n]`);
    numbersPart = parts[1];
  }

  const numbers = numbersPart
    .split(delimiterPattern)
    .map(num => parseInt(num));

  return numbers.reduce((sum, num) => sum + num, 0);
}
