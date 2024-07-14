// Funkcja, która sortuje stringa
function sortString(string) {
    // Konwersja stringa na tablicę, sortowanie tablicy i połączenie jej z powrotem w stringa
    return string.split('').sort().join('');
}

let sortedString = sortString("Akademia108");
console.log(sortedString);