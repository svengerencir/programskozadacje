function istiZnakovi(rijec){
    let max=0;
    for (let i=0;i<rijec.length-1;i++){
        let slovo=rijec.charAt(i);
        let brojac=0;
        for (let j=0;j<rijec.length;j++)
            if (slovo==rijec.charAt(j))
                brojac++;
        if (brojac>max) max=brojac;
    }
    return max;
}

console.log(istiZnakovi("baaaccd"))
console.log(istiZnakovi("ba2dll"))