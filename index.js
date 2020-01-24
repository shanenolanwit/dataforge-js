const faker = require('faker');

const random = require('random')

const Person = require('./src/Person')
const Transaction = require('./src/Transaction')

const p1 = new Person({ faker, random})
const p2 = new Person({ faker, random})



const t = new Transaction( {sender: p1, recipient: p2, faker, random})

var count = 0; 
var intervalObject = setInterval(function () { 
        count++; 
        console.log(new Transaction( {sender: p1, recipient: p2, faker, random}).toObject());
        if (count == 5) { 
            console.log('exiting'); 
            clearInterval(intervalObject); 
        } 
    }, 3000);