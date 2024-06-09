// ==UserScript==
// @name         CardHelper
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Show a popup on grooove.pl/revolutions/ and rejestr-bdo.mos.gov.pl, navigate through links
// @match        https://grooove.pl/revolutions/*
// @match        https://rejestr-bdo.mos.gov.pl/WasteRegister/WasteTransferAcquiredCard/EditGenerated/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const updateErrorMessage = (message) => {
        var messageElement = document.getElementById('message');
        if (messageElement) {
            messageElement.textContent = message;
        }
    }

    const updateCardCount = (count) => {
        var cardCountElement = document.getElementById('cardCount');
        if (cardCountElement) {
            cardCountElement.textContent = `Liczba kart: ${count}`;
        }
    }

    var inputValuesString = localStorage.getItem('exampleKey');
    if (inputValuesString) {
        var inputValues = JSON.parse(inputValuesString);
        updateCardCount(inputValues.length);


// Definiowanie obiektu do przechowywania wartości
        var dataValues = {
            senderEupNameValue: null,
            wasteMassValue: null,
            wasteMassName: null,
            date: null
        };

        function parseDate1(dateString) {
            // Parsowanie daty w formacie MM/DD/YY HH:mm:ss
            let [datePart, timePart] = dateString.split(' ');
            let [month, day, year] = datePart.split('/');
            let [hours, minutes, seconds] = timePart.split(':');

            // Przekształcanie roku z YY na YYYY (dodanie 2000 do roku)
            year = parseInt(year, 10) + 2000;

            return new Date(year, month - 1, day, hours, minutes, seconds);
        }

        function parseDate2(dateString) {
            // Parsowanie daty w formacie DD-MM-YYYY
            let [day, month, year] = dateString.split('-');

            return new Date(year, month - 1, day);
        }

        function isSameDay(date1, date2) {
            return date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate();
        }

        function findElementByVstAndType(vstToFind, typeToFind) {
            console.log("Szukam miejsca: " + vstToFind + " typ: " + typeToFind)
            if (vstToFind == null) {
                return null;
            }
            // Użyj metody find() do znalezienia elementu
            var foundElement = inputValues.find(function (element) {
                console.log(element.type)
                console.log(typeToFind)
                console.log(element.vst)
                console.log(vstToFind)
                return element.vst == vstToFind && typeToFind.includes(element.type);
            });

            // Zwróć znaleziony element lub null, jeśli nie został znaleziony
            return foundElement || null;
        }

// Funkcja do kliknięcia przycisku "Edycja/Zmiana statusu" w pierwszym wierszu tabeli
        function clickEditStatusButton() {
            var table = document.getElementById('table-generated-cards');
            if (table) {
                var firstRow = table.querySelector('tbody tr');
                if (firstRow) {
                    var editButton = firstRow.querySelector('td:last-child .dropdown-menu li a[title="Zmiana statusu"]');
                    if (editButton) {
                        editButton.click();
                        console.log('Przycisk "Edycja/Zmiana statusu" został kliknięty.');
                    } else {
                        console.log('Nie znaleziono przycisku "Edycja/Zmiana statusu" w pierwszym wierszu.');
                    }
                } else {
                    console.log('Nie znaleziono pierwszego wiersza w tabeli.');
                }
            } else {
                console.log('Nie znaleziono tabeli o id "table-generated-cards".');
            }
        }


// Funkcja do kliknięcia przycisku 'showhide'
        function clickShowHideButton() {
            // Znalezienie kontenera o id "_DataTransfer"
            var container = document.getElementById('_DataTransfer');

            // Sprawdzenie, czy kontener istnieje
            if (container) {
                // Znalezienie elementu 'a' z klasą 'showhide' wewnątrz kontenera
                var showHideElement = container.querySelector('.showhide');

                // Kliknięcie na znaleziony element
                if (showHideElement) {
                    showHideElement.click();
                    console.log('Przycisk "showhide" został kliknięty.');
                } else {
                    console.log('Nie znaleziono elementu "showhide" w kontenerze.');
                }
            } else {
                console.log('Nie znaleziono kontenera o id "_DataTransfer".');
            }
        }

// Funkcja do pobrania wartości z inputa 'SenderEupName'
        function logSenderEupNameValue() {
            // Znalezienie elementu input o id 'SenderEupName'
            var senderEupNameInput = document.getElementById('SenderEupName');

            // Sprawdzenie, czy element istnieje
            if (senderEupNameInput) {
                // Pobranie wartości z elementu input
                var senderEupNameValue = senderEupNameInput.value;

                // Aktualizacja obiektu dataValues
                dataValues.senderEupNameValue = senderEupNameValue;
                // Wypisanie wartości w konsoli
                console.log('Wartość w polu SenderEupName:', senderEupNameValue);
            } else {
                console.log('Element o id "SenderEupName" nie został znaleziony.');
            }
        }

        function lodPlannedTransportDate() {
            // Znalezienie elementu input o id 'PlannedTransportDate'
            var plannedTransportDateInput = document.getElementById('PlannedTransportDate');

            // Sprawdzenie, czy element istnieje
            if (plannedTransportDateInput) {
                // Pobranie wartości z elementu input
                var plannedTransportDateInputValue = plannedTransportDateInput.value;

                // Aktualizacja obiektu dataValues
                dataValues.date = plannedTransportDateInputValue;
                // Wypisanie wartości w konsoli
                console.log('Wartość w polu PlannedTransportDate:', plannedTransportDateInputValue);
            } else {
                console.log('Element o id "PlannedTransportDate" nie został znaleziony.');
            }
        }

// Funkcja do pobrania wartości z inputa 'WasteMass'
        function logWasteMassValue() {
            // Znalezienie elementu input o id 'WasteMass'
            var wasteMassInput = document.getElementById('WasteMass');

            // Sprawdzenie, czy element istnieje
            if (wasteMassInput) {
                // Pobranie wartości z elementu input
                var wasteMassValue = wasteMassInput.value;

                // Aktualizacja obiektu dataValues
                dataValues.wasteMassValue = wasteMassValue;

                // Wypisanie wartości w konsoli
                console.log('Wartość w polu WasteMass:', wasteMassValue);
            } else {
                console.log('Element o id "WasteMass" nie został znaleziony.');
            }
        }

// Funkcja do pobrania wartości z inputa 'WasteName'
        function logWasteMassName() {
            // Znalezienie elementu input o id 'WasteName'
            var wasteMassNameInput = document.getElementById('WasteName');

            // Sprawdzenie, czy element istnieje
            if (wasteMassNameInput) {
                // Pobranie wartości z elementu input
                var wasteMassName = wasteMassNameInput.value;

                // Aktualizacja obiektu dataValues
                dataValues.wasteMassName = wasteMassName;

                // Wypisanie wartości w konsoli
                console.log('Wartość w polu WasteMass:', wasteMassName);
            } else {
                console.log('Element o id "WasteMass" nie został znaleziony.');
            }
        }

        function openRejectModal() {
            // Znajdź przycisk "Odrzuć" po atrybucie href
            var rejectButton = document.querySelector('a[href="#rejectModal"]');

            // Kliknij przycisk "Odrzuć", jeśli został znaleziony
            if (rejectButton) {
                rejectButton.click();
            } else {
                console.log('Nie znaleziono przycisku "Odrzuć".');
            }
        }

        function openAcceptModal() {
            // Znajdź przycisk "Odrzuć" po atrybucie href
            var receiveButton = document.querySelector('a[href="#modalReceive"]');

            // Kliknij przycisk "Potwierdź", jeśli został znaleziony
            if (receiveButton) {
                receiveButton.click();
            } else {
                console.log('Nie znaleziono przycisku "Potwierdź".');
            }
        }

        function insertWasteValue(wasteMassValue) {
            // Wybierz pole tekstowe za pomocą jego ID
            var rejectInfoTextArea = document.getElementById('rejectInfo');
            if (rejectInfoTextArea) {
                rejectInfoTextArea.value = wasteMassValue;

                var inputEvent = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                });

                var changeEvent = new Event('change', {
                    bubbles: true,
                    cancelable: true,
                });

                rejectInfoTextArea.dispatchEvent(inputEvent);
                rejectInfoTextArea.dispatchEvent(changeEvent);
            }
        }

        function normalizeVstValue(vstString) {
            // Usunięcie prefiksu "VST" i spacji, a następnie sparsowanie liczby
            if (vstString == null) {
                return null;
            }
            return parseInt(vstString.replace('VST', '').trim(), 10);
            // var vstNumber = parseInt(vstString.replace('VST', '').trim(), 10);

            // Przekształcenie liczby na postać trzycyfrową z wiodącymi zerami
            // return vstNumber.toString().padStart(3, '0');
        }

        function isMassValueCorrect(foundElement) {
            console.log(dataValues.wasteMassValue)
            let replace = dataValues.wasteMassValue.replace(",", '.');
            console.log(replace)
            console.log(foundElement.wasteMassValue)
            return foundElement.wasteMassValue == replace;
        }

        function rejectIfVstExist() {
            let findElementByVst1 = findElementByVstAndType(normalizeVstValue(dataValues.senderEupNameValue), dataValues.wasteMassName);
            if (findElementByVst1 != null) {
                const date1 = parseDate1(findElementByVst1.date);
                const date2 = parseDate2(dataValues.date);
                let sameDay = isSameDay(date1, date2);
                if (!sameDay) {
                    updateErrorMessage("Niejednoznaczna data")
                    return;
                }

                if (!isMassValueCorrect(findElementByVst1)) {
                    openRejectModal();
                    insertWasteValue(findElementByVst1.wasteMassValue);
                } else {
                    openAcceptModal();
                }
            } else {
                updateErrorMessage("Karta nie została znaleziona w pliku excel");
                console.log("KARTA NIE ZOSTAŁA ZNALEZIONA W PLIKU EXCEL")
            }
        }




        const fillDialog = () => {
            var wasteMassName = document.getElementById('wasteMassName');
            if (wasteMassName) {
                wasteMassName.textContent = "Typ: " + dataValues.wasteMassName;
            }

            var senderEupNameValue = document.getElementById('senderEupNameValue');
            if (senderEupNameValue) {
                senderEupNameValue.textContent = "Oddział: " + dataValues.senderEupNameValue;
            }

            var wasteMassValue = document.getElementById('wasteMassValue');
            if (wasteMassValue) {
                wasteMassValue.textContent = "Masa: " + dataValues.wasteMassValue;
            }

            var plannedTransportDateValue = document.getElementById('plannedTransportDate');
            if (plannedTransportDateValue) {
                plannedTransportDateValue.textContent = "Data: " + dataValues.date;
            }
        }

        if (document.readyState === 'complete') {
            console.log('The DOM is ready');

// Użycie timeout do wykonania obu funkcji po opóźnieniu
            setTimeout(() => {
                clickShowHideButton();
                logWasteMassValue();
                logWasteMassName();
                logSenderEupNameValue();
                lodPlannedTransportDate();
                fillDialog();
                console.log('Obiekt dataValues:', dataValues);
                rejectIfVstExist();
                // setTimeout(function () {
                //     console.log('Wracanie do poprzedniej strony...');
                //     window.history.back();
                // }, 3000);
            }, 1500); // 500 ms opóźnienia, aby panel miał czas na rozwinięcie

            // good to go! Put your code here.
        }
    } else {
        updateErrorMessage("Nie udało się wczytać danych z pliku!")
        console.log("Nie udało się wczytać danych z pliku!")
    }
})();
