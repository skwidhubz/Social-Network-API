const router = require('express').Router();

// Get all posts ---> example from doc.
router.get("/test", (req, res) => {
	console.log('hello test');
});

module.exports = router;

