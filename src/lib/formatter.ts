export function convertToNumber(str: any) {
    if (!str) return null;

    if (isNaN(Number(str))) {
        return null;
    }

    return Number(str);
}
