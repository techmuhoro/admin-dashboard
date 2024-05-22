import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
    useLayoutEffect,
} from 'react';

export default function useStickyState(
    defaultValue: string | undefined,
    key: string
): [v: string | undefined, (v: string) => void] {
    const [value, setValue] = useState<string | undefined>(defaultValue);

    useLayoutEffect(() => {
        const stickyValue = localStorage.getItem(key);

        if (stickyValue !== null) {
            setValue(stickyValue);
        }
    }, [key, setValue]);

    return [
        value,
        (v: string) => {
            localStorage.setItem(key, v);
            setValue(v);
        },
    ];
}
