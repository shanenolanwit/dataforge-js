const faker = require('faker');

const randomName = faker.name.findName();
const randomEmail = faker.internet.email(); 

console.log(randomName);
console.log(randomEmail);