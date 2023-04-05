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

    // Empty array for users
    const usersArr = []; 

    // Empty array for thoughts
    const thoughtsArr = []; 

    for (let i = 0; i < 5; i++) {
        const username = getRandomUserName();
        const email = getRandomEmail();
        const thought = getRandomThought();
        const friends = getRandomUserName();

        usersArr.push({
            username,
            email,
            thought,
            friends,
        });

        thoughtsArr.push({
            thought
        });
    };
    

    await Users.collection.insertMany(usersArr);

    await Thoughts.collection.insertMany(thoughtsArr);

    console.table(usersArr);
    console.table(thoughtsArr)
    console.info('Seeding complete 😺🌱');
    process.exit(0);
});

 // insertMany = takes an array of multiple objects
 // inserOne = takes one object.


