// Set requirements (Express Router)
const router = require('express').Router();

// Set routes (user and thought routes)
const usersRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
// Import the test route
const testRoutes = require('./testRoute');


// Route for testing console logs / requests
router.use('/test', testRoutes);

// Add `/users` to created routes 
router.use('/users', usersRoutes);

// Add `/thoughts` to created routes 
router.use('/thoughts', thoughtsRoutes);

// Export Module Router
module.exports = router;