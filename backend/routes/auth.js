const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) =>
        res
          .status(500)
          .json({ error: "An error occurred while creating the user" })
      );
  }
);

module.exports = router;
