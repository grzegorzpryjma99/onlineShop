import React, {useRef} from 'react';
import {FileUpload, FileUploadHandlerEvent} from 'primereact/fileupload';
import * as XLSX from 'xlsx';
import {Card} from "@/components/bdo/LocalStorage";
import useLocalStorage from "@/components/bdo/LocalStorageHook";
import {Toast} from "primereact/toast";

const ExcelFileUpload: React.FC = () => {
    const toast = useRef<Toast>(null);
    const [value, setValue] = useLocalStorage<Card[]>('exampleKey', []);

    const customBase64Uploader = async (event: FileUploadHandlerEvent) => {
        const file = event.files[0];
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});

            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            const headers = XLSX.utils.sheet_to_json(worksheet, { header: 1 })[0] as string[];
            const expectedHeaders = ['Nr VST (000)', 'MAKULATURA MG', 'FOLIA W MG', 'DATA'];

            const headersValid = expectedHeaders.every(header => headers.includes(header));

            if (!headersValid) {
                toast.current?.show({ severity: 'error', summary: 'Błąd', detail: 'Nieprawidłowe nagłówki kolumn' });
                e.preventDefault();
                return;
            }

            const jsonData: Card[] = XLSX.utils.sheet_to_json(worksheet, {raw: false}).flatMap((row: any) => {
                console.log(row)
                const rowData: Card = {
                    vst: row['Nr VST (000)'],
                    wasteMassValue: row['MAKULATURA MG'],
                    type: '15 01 01',
                    processed: false,
                    date: row["DATA"]
                };

                const rowData1: Card = {
                    vst: row['Nr VST (000)'],
                    wasteMassValue: row['FOLIA W MG'],
                    type: '15 01 02',
                    processed: false,
                    date: row["DATA"]
                };

                return [rowData, rowData1];
            });
            setValue(jsonData)
            toast.current?.show({severity: 'success', summary: 'Ok', detail: 'Odśwież stronę'});
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <Toast ref={toast}/>
            <FileUpload
                chooseLabel="Wybierz plik"
                uploadLabel="Wyślij"
                cancelLabel="Anuluj"
                mode={"basic"}
                customUpload
                uploadHandler={customBase64Uploader}
                accept=".xlsx,.xls"
            />
        </div>
    );
};

export default ExcelFileUpload;
