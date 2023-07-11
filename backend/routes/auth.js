const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const user = new User(req.body); // Use 'new' to create a new instance
  user.save();
  res.send(req.body);
});

module.exports = router;
