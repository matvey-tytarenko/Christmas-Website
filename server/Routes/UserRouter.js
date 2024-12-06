const { GetMail } = require('../Controller/UserController');

const router = require('express').Router();

router.post("/congratulation", GetMail)

module.exports = router;