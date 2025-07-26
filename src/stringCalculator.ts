export function addString(input: string): number {
    // Given string is empty
    if (input === "") return 0;

    // Given '5' as input returns 5.
    if (!input.includes(",")) {
        return parseInt(input);
    }
    return -1;
}
