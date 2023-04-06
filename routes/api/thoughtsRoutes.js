// Require express router
const router = require('express').Router();

// Set requirements (from thoughts-controller)
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controller/thoughtsController');

// Route -> /api/thoughts GET
router.route('/').get(getAllThoughts).post(createThoughts);;

// Route -> /api/thoughts/:id GET, PUT & DELETE
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// Route -> /api/thoughts/:thoughtId/reactions POST
router.route('/:thoughtId/reactions').post(addReaction);

// Route -> /api/thoughts/:thoughtId/reactionId DELETE
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export module router
module.exports = router;