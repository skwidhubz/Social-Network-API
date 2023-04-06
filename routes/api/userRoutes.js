// Require express router
const router = require('express').Router();

// Set requirements (from users-controller)
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controller/userController');

// Route -> /api/users GET & POST
router.route('/').get(getAllUsers).post(createUsers);

// Route -> /api/users/:id GET, PUT & DELETE
router.route('/:userId').get(getUsersById).put(updateUsers).delete(deleteUsers);

// Route -> /api/users/:userId/friends/:friendId POST & DELETE
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

// Module export router
module.exports = router; 