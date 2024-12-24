const { GetMail } = require('../Controller/UserController');

const router = require('express').Router();

router.get("/congratulation", (req, res) => {
    router.post("/congratulation", GetMail);
    return res.status(200).json({msg: "Email was sent!"});
})

module.exports = router;