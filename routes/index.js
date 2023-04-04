const router = require('express').Router();
const apiRoutes = require('./api');
const testRoute = require('./api/testRoute');

router.use('/api', apiRoutes);
// router.use('/users', userRoutes);
// router.use('/thoughts', thoughtRoutes);


router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

