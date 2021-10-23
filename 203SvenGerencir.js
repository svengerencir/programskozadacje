let dstranica = prompt("Unesi duljinu stranice kvadrata");

for (let i=dstranica;i>0;i--){
    console.log((((i%2)?"# ":" #").repeat(dstranica/2+1)).substring(0,dstranica));
}
