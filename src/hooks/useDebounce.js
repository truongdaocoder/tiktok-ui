import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const clear = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(clear);
        // eslint-disable-next-line
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
