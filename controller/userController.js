// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const User = require('../models');

// router.route('/').get(getUsers).post(createUser); 


// test func
function testFunc(req, res) {
    console.log('userController exported func');
}






module.exports = {
    
    testFunc

    // get all users


    // get a single user


    // create a user
    

    // delete a user


}
