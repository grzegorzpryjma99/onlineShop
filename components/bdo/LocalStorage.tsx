import React, {useEffect, useRef, useState} from 'react';
import useLocalStorage from "@/components/bdo/LocalStorageHook";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {FilterMatchMode} from "primereact/api";
import {Toast} from 'primereact/toast';
import ExcelFileUpload from "@/components/bdo/ExcelFileUpload";
import {Button} from "primereact/button";

export interface Card {
    vst: string
    wasteMassValue: number
    type: string
    processed: boolean
    date: Date
}

const LocalStorage = () => {
    const toast = useRef<Toast>(null);
    const [value, setValue] = useLocalStorage<Card[]>('exampleKey', []);
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
        vst: {value: '', matchMode: FilterMatchMode.CONTAINS}
    });

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

    const handleCheckboxChange = (rowData: Card) => {
        const updatedValue = value.map(item => {
            // Sprawdź czy vst i type są zgodne
            if (item.vst === rowData.vst && item.type === rowData.type && item.date === rowData.date) {
                return {...item, processed: !item.processed};
            }
            return item;
        });
        setValue(updatedValue);
    };

    const copy = () => {
        navigator.clipboard.writeText(`localStorage.setItem('exampleKey', JSON.stringify(${JSON.stringify(value)}));`)
        toast.current?.show({
            severity: 'success',
            summary: 'Success',
            detail: 'Polecenie zostało skopiowane do schowka'
        });
    };

    const processedBodyTemplate = (rowData: Card) => {
        return (
            <input
                type="checkbox"
                checked={rowData.processed}
                onChange={() => handleCheckboxChange(rowData)}
            />
        );
    };

    const processedSortFunction = (e: any) => {
        let _value = [...value];
        _value.sort((data1, data2) => {
            let value1 = data1.processed ? 1 : 0;
            let value2 = data2.processed ? 1 : 0;
            return (value1 - value2) * e.order;
        });

        setValue(_value);
    };

    return <div>
        <Toast ref={toast}/>
        <ExcelFileUpload/>
        {value.length > 0 && <Button label="Kopiuj" onClick={copy}/>}
        <DataTable value={value}
                   rowGroupMode="rowspan" groupRowsBy="representative.name"
                   filterDisplay="row" filters={filters}
                   sortMode="single" sortOrder={1}
                   tableStyle={{minWidth: '50rem'}}>
            <Column header="Lp" headerStyle={{width: '3rem'}} body={(data, options) => options.rowIndex + 1}/>
            <Column field="date" sortable header="Data"/>
            <Column field="vst" sortable filter filterPlaceholder="Numer oddziału" header="Numer oddziału"/>
            <Column field="type" header="Typ"/>
            <Column field="wasteMassValue" header="Masa"/>
            <Column header="Zrobione"
                    sortable
                    sortFunction={processedSortFunction}
                    body={processedBodyTemplate}
                    headerStyle={{width: '3rem'}}/>
        </DataTable>
    </div>
}

export default LocalStorage;