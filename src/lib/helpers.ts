export function convertStringParamsToObject(value: string) {
    const urlParams = new URLSearchParams(value);

    const obj: { [key: string]: string } = {};

    for (const [key, value] of urlParams) {
        obj[key] = value;
    }

    return obj;
}
