let studenti = [
  {
    ime: "Marko",
    prezime: "Marković",
    grad: "Pula",
  },
  {
    ime: "Iva",
    prezime: "Ivić",
    grad: "Našice",
  },
  {
    ime: "Lucija",
    prezime: "Lucić",
    grad: "Zagreb",
  },
  {
    ime: "Nikola",
    prezime: "Nikolić",
    grad: "Rijeka",
  },
];

function napredna_pretraga(lista, pojam) {
  for (let j = 0; j < lista.length; j++) {
    let pompojam = pojam.toUpperCase();
    for (let i = 0; i < pompojam.length; i++) {
      if (pompojam[i] == " ") {
        let dio = new RegExp(pompojam.slice(0, i));
        pompojam = pompojam.slice(i + 1);
        i = -1;
        if (
          !dio.test(lista[j].ime.toUpperCase()) &&
          !dio.test(lista[j].prezime.toUpperCase()) &&
          !dio.test(lista[j].grad.toUpperCase())
        )
          break;
      }
      if (i == pompojam.length - 1) {
        let dio = new RegExp(pompojam.toUpperCase());
        if (
          dio.test(lista[j].ime.toUpperCase()) ||
          dio.test(lista[j].prezime.toUpperCase()) ||
          dio.test(lista[j].grad.toUpperCase())
        )
          return j;
      }
    }
  }
  return false;
}

console.assert(napredna_pretraga(studenti, "ma ić") == 0);
console.assert(napredna_pretraga(studenti, "ko lić ri") == 3);
console.assert(napredna_pretraga(studenti, "ić za") == 2);
console.assert(napredna_pretraga(studenti, "ić ko la ri") == 3);
