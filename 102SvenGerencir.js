let bodovi = prompt("Unesi broj bodova");
let ocjena = (bodovi<50)?1:((bodovi<63)?2:((bodovi<76)?3:((bodovi<89)?4:5)));
let poruka = (ocjena>1)?("Čestitke! Prošao si kolegij s ocjenom " + ocjena):"Nisi položio predmet! Više sreće drugi put";

console.log(poruka);