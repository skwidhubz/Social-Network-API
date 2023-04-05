const { connect } = require('mongoose');
const connection = require('../config/connection');
const { Thoughts, Users } = require('../models');
const { getRandomArrItem, getRandomEmail, getRandomUserName, getRandomThought } = require('./data');


connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing Users
    await Users.deleteMany({});

    // Drop exisiting Thoughts
    await Thoughts.deleteMany({});

    // Drop existing Reactions
    // await Reactions.deleteMany({});

    // empty array for users
    // username
    // email
    // thoughts (thoughtsSchema)
    // friends (userSchema)
    const users = [];

    for (let i = 0; i < 5; i++) {
        const username = getRandomUserName();
        const email = getRandomEmail();
        const thoughts = getRandomThought();
        const friends = getRandomUserName();

        users.push({
            username,
            email,
            thoughts,
            friends,
        });
    }

    await Users.collection.insertMany(users);

    // empty array for thoughts
    // text
    // created at
    // username
    // recations (reactionSchema)
    // const thoughts = [];

    // for (let i = 0; i < 5; i++) {
    //     const thoughtText = getRandomThought();

    // }

    console.table(users);
    console.info('Seeding complete 😺🌱');
    process.exit(0);
});



 // insertMany = takes an array of multiple objects
 // inserOne = takes one object.


