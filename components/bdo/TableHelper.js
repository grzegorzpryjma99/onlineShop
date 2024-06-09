// ==UserScript==
// @name         Table Helper & Frame
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Show a popup on grooove.pl/revolutions/ and rejestr-bdo.mos.gov.pl, navigate through links
// @match        https://grooove.pl/revolutions/*
// @match        https://rejestr-bdo.mos.gov.pl/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const getLinks = () => {
        var localStorageKey = 'editStatusHrefValues';
        localStorage.removeItem(localStorageKey);
        var table = document.getElementById('table-generated-cards');
        var hrefValues = [];

        if (table) {
            // Pobranie wszystkich wierszy tabeli
            var rows = table.querySelectorAll('tbody tr');

            // Iteracja przez wszystkie wiersze
            rows.forEach(function (row) {
                // Znalezienie przycisku "Edycja/Zmiana statusu" w bieżącym wierszu
                var editButton = row.querySelector('td:last-child .dropdown-menu li a[title="Zmiana statusu"]');

                // Sprawdzenie, czy przycisk istnieje
                if (editButton) {
                    // Pobranie wartości href z przycisku
                    var hrefValue = editButton.getAttribute('href');

                    // Dodanie wartości href do tablicy z prefiksem
                    hrefValues.push('https://rejestr-bdo.mos.gov.pl' + hrefValue);
                } else {
                    console.log('Nie znaleziono przycisku "Edycja/Zmiana statusu" w bieżącym wierszu.');
                }
            });

            localStorage.setItem(localStorageKey, JSON.stringify(hrefValues));
            // Wyświetlenie wszystkich wartości href w konsoli
            console.log('Wartości href przycisków "Edycja/Zmiana statusu":', hrefValues);
            // Aktualizacja licznika linków w popupie
            updateLinkCount(hrefValues.length);
        } else {
            updateErrorMessage("Wystąpił błąd. Odśwież stronę")
            console.log('Nie znaleziono tabeli o id "table-generated-cards".');
        }
    }

    // Funkcja do aktualizacji licznika linków w popupie
    const updateLinkCount = (count) => {
        var linkCountElement = document.getElementById('linkCount');
        if (linkCountElement) {
            linkCountElement.textContent = `Liczba linków: ${count}`;
        }
    }

    // Pobieranie wartości z localStorage przy ładowaniu strony
    const loadLinkCount = () => {
        var localStorageKey = 'editStatusHrefValues';
        var hrefValues = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        updateLinkCount(hrefValues.length);
    }

    const updateErrorMessage = (message) => {
        var messageElement = document.getElementById('message');
        if (messageElement) {
            messageElement.textContent = message;
        }
    }

    // Funkcja do przechodzenia na pierwszą stronę z listy
    const goToNextLink = () => {
        var localStorageKey = 'editStatusHrefValues';
        var hrefValues = JSON.parse(localStorage.getItem(localStorageKey)) || [];

        if (hrefValues.length > 0) {
            // Weź pierwszą wartość z tablicy
            var nextLink = hrefValues.shift();

            // Zapisz zaktualizowaną tablicę do localStorage
            localStorage.setItem(localStorageKey, JSON.stringify(hrefValues));

            // Zaktualizuj licznik linków w popupie
            updateLinkCount(hrefValues.length);

            // Przejdź do następnej strony
            localStorage.setItem('redirected', 'true');
            window.location.href = nextLink;
        } else {
            updateErrorMessage("Brak linków do przejścia. Zaciągnij kolejne dane.")
        }
    }

    // Tworzenie nowego elementu div
    var popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '60px';
    popup.style.right = '10px';
    popup.style.padding = '10px';
    popup.style.backgroundColor = 'white';
    popup.style.border = '1px solid black';
    popup.style.zIndex = '10000';
    popup.style.width = '20%';
    popup.style.borderRadius = '10px'
    popup.style.color = 'black'
    popup.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-size: 16px; border-bottom: 1px solid;">
            <p>Pomocnik BDO</p>
            <button id="closePopup" style="font-size: 16px; font-weight: bold; border: none; background: none;">&times;</button>
        </div>
        <p id="linkCount">Liczba linków: 0</p>
        <p id="cardCount">Liczba kart: 0</p>
        <p id="message" style="color: red;">Wiadomosc: brak</p>
        <p id="cardInfoLabel">Odczyt  z karty:</p>
        <p style="font-weight: bold;" id="wasteMassName"></p>
        <p style="font-weight: bold;" id="senderEupNameValue"></p>
        <p style="font-weight: bold;" id="wasteMassValue"></p>
        <p style="font-weight: bold;" id="plannedTransportDate"></p>
        <div style="display: flex; justify-content: space-between;">
            <button id="runFunction">Załaduj wiersze</button>
            <button id="nextLink">Dalej</button>
        </div>
    `;

    // Dodanie popupu do dokumentu
    document.body.appendChild(popup);

    // Dodanie funkcji zamykającej popup
    document.getElementById('closePopup').addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Dodanie event listenera do przycisku uruchamiającego funkcję getLinks
    document.getElementById('runFunction').addEventListener('click', getLinks);

    // Dodanie event listenera do przycisku "Dalej"
    document.getElementById('nextLink').addEventListener('click', goToNextLink);

    // Załadowanie liczby linków przy starcie
    loadLinkCount();

})();
