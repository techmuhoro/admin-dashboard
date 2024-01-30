export function convertStringParamsToObject(value: string) {
    const urlParams = new URLSearchParams(value);

    const obj: { [key: string]: string } = {};

    for (const [key, value] of urlParams) {
        obj[key] = value;
    }

    return obj;
}

export function sleep(timeout: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, timeout);
    });
}

export function getIntials(name: string) {
    const words = name.split(' ');

    return `${words[0][0]}${words[1][0]}`.toUpperCase();
}
