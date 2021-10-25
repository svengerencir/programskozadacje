/* 
INPUT = {
 "prvi": 122,
 "drugi": 18,
 "treci": "NotAnInteger",
 "cetvrti": -2,
 "peti": 322,
 "sesti": 32.0
}
OUTPUT = f(INPUT) */

let lista = [122, 18, "NotAnInteger", -2, 322, 32.0];

function zbrojiprikladno(lista) {
  let zbroj = 0;
  for (let i = 0; i < lista.length; i++)
    if (!isNaN(lista[i])) zbroj += lista[i];
  return zbroj;
}
console.log(zbrojiprikladno(lista));
