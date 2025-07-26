export function addString(input: string): number {
  if (input === "") return 0;

  const numbers = input.split(/[\n,]/).map(num => parseInt(num));
  return numbers.reduce((sum, num) => sum + num, 0);
}

