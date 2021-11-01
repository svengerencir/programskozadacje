/*
INPUT = [1,2,3,4]
OUTPUT = f(INPUT) //25
    suma kvadrata bi trebala biti 30
    1+4+9+16=30!
*/
function sumakvadrata(polje) {
  let rez = 0;
  for (let i = 0; i < polje.length; i++) rez += polje[i] * polje[i];
  return rez;
}

console.log(sumakvadrata([1, 2, 3, 4]));
