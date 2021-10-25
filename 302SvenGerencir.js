function istiZnakovi(rijec) {
  let max = 0;
  for (let i = 0; i < rijec.length - 1; i++) {
    let brojac = 0;
    for (let j = i; j < rijec.length; j++)
      if (rijec.charAt(i) == rijec.charAt(j)) brojac++;
    if (brojac > max) max = brojac;
  }
  return max;
}

console.log(istiZnakovi("baaaccd"));
console.log(istiZnakovi("ba2dll"));
