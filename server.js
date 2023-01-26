/** @format */

require("dotenv").config();

/**
 * Requirements
 */
const express = require("express");
const app = express();

/**
 * Configuration
 */
const PORT = process.env.PORT ?? 3000;

/**
 * Define Controllers
 */
const router = require("./controllers/router");
const userController = require("./controllers/user/userController");

//connect to database
const db = require("./db");
db.once("open", () => {
  console.log("connected to mongo");
});

/**
 * Middleware
 */
const setupMiddleware = require("./middleware/setupMiddleware");

setupMiddleware(app);

/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

/**
 * Use Controllers
 */
app.use("/user", userController);
app.use("/home", router);

// We are just going to redirect to /home if the user goes to our base route
app.get("/", (req, res) => {
  res.redirect("/home/");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
