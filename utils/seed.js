const { connect } = require('mongoose');
const connection = require('../config/connection');
const { Reactions, Thoughts, User } = require('../models');


connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing Users
    await User.deleteMany({});

    // Drop exisiting Thoughts
    await Thoughts.deleteMany({});

    // Drop existing Reactions
    await Reactions.deleteMany({});

    const users = [];



    console.info('Seeding complete 😺🌱');
    process.exit(0);
});



 // insertMany = takes an array of multiple objects
 // inserOne = takes one object.

 

// TODO: SEEDS 

// User

// const users = [
//     {
//         username: 'Tom',
//         email: 'tom@emails.com'
//     },
//     {
//         username: 'Dave',
//         email: 'dave@emails.com'
//     },
//     {
//         username: 'Kim',
//         email: 'kim@emails.com'
//     },
//     {
//         username: 'Ligma',
//         email: 'ligma@emails.com'
//     },
// ];

// Thoughts

// const thoughts = [
//     {
//         thoughtText: 'this is a thought, from a user',
//         username: 'Tom'
//     }
// ]

// Reactions




