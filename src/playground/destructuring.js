// 
// Object Destructuring
// 

// const person = {
//     name: 'Luke',
//     age: 25,
//     location: {
//         city: 'Redcar',
//         temp: 20
//     }
// }

// const {name: firstName = 'Anonymous', age} = person

// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name:publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName) // Object or default (Self-Published)

// 
// Array Destructuring
// 

const address = []
const [, , state = 'New York'] = address
console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, ,medium] = item

console.log(`A Medium ${itemName} costs ${medium}`)