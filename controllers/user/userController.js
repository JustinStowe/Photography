/** @format */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../models/user");

router.get("/signup", (req, res) => {
  res.render("user/Signup");
});

router.get("/login", (req, res) => {
  res.render("user/Login");
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    // hash the password that we recieve
    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );
    const createdUser = await User.create({
      username,
      password: hashedPassword,
    });
    console.log(createdUser);
    res.redirect("/user/login");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find the user by their username
    const foundUser = await User.findOne({ username });
    // Compare the sent password with the hashed one
    const result = await bcrypt.compare(password, foundUser.password);

    if (result) {
      req.session.username = foundUser.username;
      req.session.loggedIn = true;

      res.redirect("/fruits");
    } else {
      // error if password doesn't match
      res.json({ error: "password doesn't match" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    console.error(err);
    res.redirect("/");
  });
});

module.exports = router;
