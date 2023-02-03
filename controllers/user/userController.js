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

// router.get("/account", (req, res) => {
//   // const {username, password} = this.props
//   res.render("user/Account");
// });

router.post("/signup", async (req, res) => {
  const { username, password, name, phoneNumber, email, projectId } = req.body;

  try {
    // hash the password that we recieve
    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );
    const createdUser = await User.create({
      username,
      password: hashedPassword,
      name,
      phoneNumber,
      email,
      projectId,
    });
    console.log(createdUser);
    res.redirect("/user/login");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  // if (req.session) {
  //   req.session = null;
  // }
  const { username, password } = req.body;
  try {
    // Find the user by their username
    const foundUser = await User.findOne({ username });
    // Compare the sent password with the hashed one
    const result = await bcrypt.compare(password, foundUser.password);

    if (result) {
      req.session.userId = foundUser._id;
      req.session.username = foundUser.username;
      req.session.password = foundUser.password;
      req.session.loggedIn = true;
      res.redirect("/home");
    } else {
      // error if password doesn't match
      res.json({ error: "password doesn't match" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
// router.put("/:id", async (req, res) => {
//   const { username, currentpassword, newpassword } = req.body;

//   try {
//     //find user by id
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).send("user not found");
//     }

//     //Hash the new password if provided
//     if (password) {
//       try {
//         const result = await bcrypt.compare(currentpassword, user.password);
//         if (result) {
//           user.password = await bcrypt.hash(
//             newpassword,
//             await bcrypt.genSalt(10)
//           );
//         } else {
//           res.json({ error: "old password is incorrect" });
//         }
//       } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//       }
//     }
//     //update the username if provided
//     if (username) {
//       user.username = username;
//     }

//     //save the changes
//     const updatedUser = await user.save();
//     res.send(updatedUser);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    console.error(err);
    res.redirect("/home");
  });
});

module.exports = router;
