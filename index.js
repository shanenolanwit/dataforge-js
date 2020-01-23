const faker = require('faker');

const random = require('random')

const Person = require('./src/Person')
const Transaction = require('./src/Transaction')

const p1 = new Person({ faker, random})
const p2 = new Person({ faker, random})



const t = new Transaction( {sender: p1, recipient: p2, faker, random})

console.log(t.toObject())