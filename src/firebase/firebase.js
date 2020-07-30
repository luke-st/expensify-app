import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses').once('value')
// //   .then((snapshot) => {
// //       const expenses = []

// //       snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //       })
// //     console.log(expenses)
// //     }
// // )

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = []

// //     snapshot.forEach((expense) => {
// //         expenses.push({
// //             id: expense.key,
// //             ...expense.val()
// //         })
// //     })
// //     console.log(expenses)
// // })

// // const expenses = [{
// //     description: 'Item One',
// //     note: 'This is the first item',
// //     amount: 4500,
// //     createdAt: 0
// // }, {
// //     description: 'Item Two',
// //     note: 'This is the second item',
// //     amount: 8000,
// //     createdAt: 0
// // }, {
// //     description: 'Item Three',
// //     note: 'This is the third item',
// //     amount: 10500,
// //     createdAt: 0
// // }]

// // expenses.forEach((expense) => {
// //     database.ref('expenses').push(expense).then((key) => {
// //         console.log('Post successful, key is:', key.path.pieces_[1])
// //     }).catch((e) => {
// //         console.log('Something went wrong', e)
// //     })
// // })
