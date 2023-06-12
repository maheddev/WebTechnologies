const router = require("express").Router();
const User = require("../Models/users");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");



router.post("/register", async (req, res) => {
  let oldUser = await User.findOne({ email: req.body.email });
  if (oldUser) {
    return res.status(400).send({ message: "User already registered" });
  } else {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    return res.send(_.pick(user, ["name", "email"]));
  }
});

router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  } else {
    let isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      return res.status(200).send({ message: "Login un-Successful" });
    } else {
        let token = jwt.sign({_id: user._id, name: user.name}, "vkkx6702PMIK1234")
      res.send({ message: "Login successful"+ token });
    }
  }
});

module.exports = router;
