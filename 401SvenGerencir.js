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

function provjeri(lista, pojam) {
  let i = 0;
  while (i < lista.length) {
    if (lista[i].upisan)
      if (lista[i].ime == pojam || lista[i].prezime == pojam) return true;
    i++;
  }
  return false;
}

console.log(provjeri(student, "Klara"));
console.log(provjeri(student, "Lucija"));
console.log(provjeri(student, "Paprika"));
