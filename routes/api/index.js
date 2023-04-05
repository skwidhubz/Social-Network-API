const router = require('express').Router();
const testRoute = require('./testRoute');

router.use('/test', testRoute);
router.use('/hello', req, res => {
    console.log('hello!');
    res.send('hello');
})

module.exports = router;


