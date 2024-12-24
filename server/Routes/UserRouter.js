const { GetMail } = require("../Controller/UserController");

const router = require("express").Router();

router.get("/congratulation", (req, res) => {
  return res.status(200).json({ msg: "Email was sent!" });
});

router.post("/congratulation", GetMail);

module.exports = router;
