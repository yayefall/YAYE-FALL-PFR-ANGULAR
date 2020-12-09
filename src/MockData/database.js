var faker = require('faker');

var database = { users: [],profils: []};
var tab=["ADMIN","FORMATEUR","APPRENANT","CM"];

for (let i = 1; i<= 4; i++) {
  database.profils.push({
    id: i,
    libelle: tab[i-1],
    archivage: false
  })

  for (let a = 1; a <= 10; a++) {
    database.users.push({
      id: a,
      nom: faker.name.firstName(),
      prenom: faker.name.lastName(),
      username: faker.internet.email(),
      password: faker.internet.password(),
      imageUrl: "https://source.unsplash.com/1600x900/?users",
      profils: tab[i-1],
      statut: faker.random.arrayElements(["actif","mort"]),
      archivage:false,

    })
  }
}
console.log(JSON.stringify(database));
