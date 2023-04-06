// Require Users Model
const { Users, Thoughts } = require('../models');

// Set up Users Controller
const usersController = {
    
    // Create a new User
    createUsers({body}, res) {
        Users.create(body)
        .then(dbUsersData => res.json(dbUsersData))
        .catch(err => res.status(400).json(err));
    },

    // Get All Users
    async getAllUsers(req, res) {
        // Users.find({})
        // // populate users thoughts
        // .populate({path: 'thoughts', select: '-__v'})
        // // populate user friends
        // .populate({path: 'friends', select: '-__v'})
        // .select('-__v')
        // // .sort({_id: -1})
        // .then(dbUsersData => res.json(dbUsersData))
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json(err);
        // });
        try {
            const dbUserData = await Users.find() 
            .select('-__v')
            res.json(dbUserData)
        } catch (error ) {
            console.log(error)
            res.status(500).json(error)
        }
    },

    // Get single user by ID
   async getUsersById(req, res) {
        // Users.findOne({_id: params.id })
        // .populate({path: 'thoughts', select: '-__v'})
        // .populate({path: 'friends', select: '-__v'})
        // .select('-__v')
        // // return if no user is found 
        // .then(dbUsersData => {
        //     if(!dbUsersData) {
        //         res.status(404).json({message: 'No User with this particular ID!'});
        //         return; 
        //     }
        //     res.json(dbUsersData)
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.status(400).json(err)
        // })
        try {
            const dbUserData = await Users.findOne({ _id: req.params.userId })
                .select('-__v')
                // .populate('friends')
                // .populate('thoughts')
            // console.log(dbUserData);

            if (!dbUserData) {
                return res.status(404).json({message: 'no user found'})
            }

            res.json(dbUserData)
        } catch (error ) {
            console.log(error)
            res.status(500).json(error)
        }
    },

    // Update a current User by ID
    updateUsers({params, body}, res) {
        Users.findOneAndUpdate({_id: params.userId}, body, {new: true, runValidators: true})
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err))
    },

    // Delete a current user by ID
    deleteUsers({params}, res) {
        Users.findOneAndDelete({_id: params.userId})
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
            res.json({message: 'User has been successfully deleted'});
            return;
        })
        .catch(err => res.status(400).json(err));
    },

    
    addFriend({params}, res) {
        Users.findOneAndUpdate({_id: params.userId}, {$push: { friends: params.friendId}}, {new: true})
        .populate({path: 'friends', select: ('-__v')})
        .select('-__v')
        .then(dbUsersData => {
            if (!dbUsersData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
        res.json(dbUsersData);
        })
        .catch(err => res.json(err));
    },

    // Delete a current Friend
    deleteFriend({ params }, res) {
        Users.findOneAndUpdate({_id: params.userId}, {$pull: { friends: params.friendId}}, {new: true})
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
            res.json(dbUsersData);
        })
        .catch(err => res.status(400).json(err));
    }

};

// Export module users controller
module.exports = usersController; 