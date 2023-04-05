const router = require('express').Router();

// test route.
router.get('test', (req, res) => {
	console.log('hello test');
});

module.exports = router;

