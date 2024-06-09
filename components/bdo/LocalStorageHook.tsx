import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

const useLocalStorage = <T,>(key: string, initialValue: T): [T, SetValue<T>] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue: SetValue<T> = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
                // Send the updated value to the iframe
                const iframe = document.getElementById('shared-storage-iframe') as HTMLIFrameElement;
                if (iframe) {
                    iframe.contentWindow?.postMessage({ type: 'set', key, value: JSON.stringify(valueToStore) }, 'http://localhost:3000');
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === key) {
                console.log(event)
                setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
            }
        };

        const handleMessage = (event: MessageEvent) => {
            if (event.origin === 'http://localhost:3000' && event.data.key === key) {
                setStoredValue(event.data.value ? JSON.parse(event.data.value) : initialValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('message', handleMessage);
        };
    }, [key, initialValue]);

    return [storedValue, setValue];
};

export default useLocalStorage;
