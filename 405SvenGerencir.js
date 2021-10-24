let autor = [
  {
    //agregacija podataka
    ime: "Mario",
    prezime: "Pedala",
    grad: "Virovitica",
    obrazovanje: "mag.theol",
    kontakt: [
      //kompozicija
      {
        naziv: "email",
        vrijednost: "mariokraljpedalina@gmail.com",
      },
      {
        naziv: "telefon",
        vrijednost: "+09232932933232",
      },
    ],
    registracijaId: 21210210210, //jedan na jedan veza
    clanakId: [001, 002, 302], //jedan na više veza
  },
  {
    ime: "Ivana",
    prezime: "Kuka",
    grad: "Rijeka",
    obrazovanje: "mag.phil",
    kontakt: [
      {
        naziv: "email",
        vrijednost: "ivanakukakadinetreba@gmail.com",
      },
      {
        naziv: "facebook",
        vrijednost: "https://facebook.com/ivanakukakadtreba.com",
      },
    ],
    registracijaId: 21817260265,
    clanakId: [100, 232, 596],
  },
  {
    ime: "Stipe",
    prezime: "Klesar",
    grad: "Pula",
    obrazovanje: "samouki filozof",
    kontakt: [
      {
        naziv: "email",
        vrijednost: "stipeklesarnajjaciukraju@gmail.com",
      },
    ],
    registracijaId: 45450450245,
    clanakId: [223, 205, 200],
  },
];

console.log(autor[0].kontakt[0].vrijednost);
