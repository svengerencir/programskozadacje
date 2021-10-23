function provjeri(lista, pojam, status) {
  let obrazac = new RegExp(pojam.toUpperCase());
  let i = 0;
  while (i < lista.length) {
    if (lista[i].upisan == status)
      if (
        obrazac.test(lista[i].ime.toUpperCase()) ||
        obrazac.test(lista[i].prezime.toUpperCase())
      )
        return true;
    i++;
  }
  return false;
}

let student = [
  {
    ime: "Marija",
    prezime: "Marić",
    upisan: true,
  },
  {
    ime: "Ivan",
    prezime: "Ivanić",
    upisan: true,
  },
  {
    ime: "Hrvoje",
    prezime: "Horvat",
    upisan: false,
  },
  {
    ime: "Matea",
    prezime: "Matić",
    upisan: true,
  },
  {
    ime: "Zlatko",
    prezime: "Zlatić",
    upisan: false,
  },
  {
    ime: "Ana",
    prezime: "Anić",
    upisan: true,
  },
  {
    ime: "Lucija",
    prezime: "Lucić",
    upisan: false,
  },
  {
    ime: "Stipe",
    prezime: "Stipančić",
    upisan: true,
  },
  {
    ime: "Marko",
    prezime: "Markić",
    upisan: false,
  },
  {
    ime: "Klara",
    prezime: "Klarić",
    upisan: true,
  },
];

console.log(provjeri(student, "voje", false));
console.log(provjeri(student, "voje", true));
console.log(provjeri(student, "Luc", true));
console.log(provjeri(student, "Luc", false));
