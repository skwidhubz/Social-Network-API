const router = require('express').Router();
const testRoute = require('./testRoute');

router.use('/test', testRoute);

