const countWords1 = (text) => {
  const words = text.replace(/[\.,!?\(\)]/g, "").split(" ");
  let dictionary = {}; // leeres Objekt
  for (const word of words) {
    if (dictionary[word]) {
      dictionary[word]++; //Wert für den Schlüssel 'word' wird inkrementiert
    } else {
      dictionary[word] = 1; //Neues Schlüssel Wert Paar wird angelegt
    }
  }
  let list = []; //leeres Array
  for (const word in dictionary) {
    //for-in
    const count = dictionary[word]; //Anzahl Worte ermitteln
    list = [
      ...list, //Mit Spread-Operator bestehende Opjekte in das Array eingepflegt
      { word: word, count: count }, //Objekt in Array hinzugefügt
    ];
  }
  return list;
};
const result1 = countWords1("Dies ist ein Test, der ein Test ist!");
console.log(result1);

// oder

const countWords2 = (text) => {
  const dictionary = text
    .replace(/[\.,!?\(\)]/g, "")
    .split(" ")
    .reduce(
      (dict, word) => ({
        // linker Operand; Objekt dict (Häufigkeitsmap), rechter Operand neues Word
        ...dict,
        // Kopie des Objektes dict
        [word]:
          [word] in dict
            ? ++dict[word] //Wert mit Schlüssel 'word' wird inkrementiert
            : 1, //Neues Schlüssel Wert Paar angelegt
      }),
      {}
    );
  return Object.keys(dictionary).map((word) => ({
    word,
    count: dictionary[word],
  }));
};
const result2 = countWords2("Dies ist ein Test, der ein Test ist!");
console.log(result2);
