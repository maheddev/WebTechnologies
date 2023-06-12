const jwt = require("jsonwebtoken");
const User = require("../Models/users");

const auth = async (req, res, next) => {
  let token = req.header("x-auth-token");
  if (!token) return res.status(400).send("Token Not Found");
  try {
    let user = jwt.verify(token, "vkkx6702PMIK1234");
    req.user =  await User.findByID(user._id);
    // if(!user) return res.status(400).send("User Not Found");
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
  next();
};
module.exports = auth;
