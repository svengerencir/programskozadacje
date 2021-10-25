/*
INPUT = ["banaana, jabuukka", "j1agoda", ""]
OUTPUT = f(INPUT) //["banana", "jabuka", "j1agoda", ""
*/

function BrisiDuploR(rijec) {
  for (let i = 0; i < rijec.length - 1; i++) {
    for (let j = i + 1; j < rijec.length; j++)
      if (rijec.charAt(i) == rijec.charAt(j)) {
        rijec = rijec.substr(0, j).concat(rijec.substr(j + 1, rijec.length));
        j -= 1;
      } else break;
  }
  return rijec;
}

function BrisiDuploL(lista) {
  for (let i = 0; i < lista.length; i++) {
    lista[i] = BrisiDuploR(lista[i]);
  }
  return lista;
}

let lista = ["banaana, jabuukka", "j1agoda", ""];
console.log(BrisiDuploL(lista));
