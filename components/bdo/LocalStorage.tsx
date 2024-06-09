import React, {useEffect, useRef} from 'react';
import useLocalStorage from "@/components/bdo/LocalStorageHook";

const LocalStorage = () => {

    const [value, setValue] = useLocalStorage<object[]>('exampleKey', []);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const allowedOrigins = ['https://online-shop-ruddy-mu.vercel.app', 'http://localhost:3000'];
            if (allowedOrigins.includes(event.origin) && event.data.key === 'exampleKey') {
                try {
                    setValue(event.data.value ? JSON.parse(event.data.value) : []);
                } catch (error) {
                    console.error('Error parsing message event data value', error);
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [setValue]);

    const syncValueToIframe = (value: object[]) => {
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage(
                {type: 'set', key: 'exampleKey', value: JSON.stringify(value)}
            );
        }
    };

    const handleButtonClick = () => {
        const newValue = [
            {vst: 217, wasteMassValue: 1, type: "15 01 02"},
            {vst: 202, wasteMassValue: 0.0200, type: "15 01 02"},
            {vst: 234, wasteMassValue: 1, type: "15 01 02"},
            {vst: 228, wasteMassValue: 5, type: "15 01 02"},
        ];
        setValue(newValue);
        syncValueToIframe(newValue);
    };

    return <div>
        <iframe ref={iframeRef} id="shared-storage-iframe" src="/storage.html" style={{display: 'none'}}></iframe>
        <pre>{JSON.stringify(value, null, 2)}</pre>
        <button onClick={handleButtonClick}>Set New Value</button>
    </div>
}

export default LocalStorage;