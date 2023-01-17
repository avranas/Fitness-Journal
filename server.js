require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const initalizePassport = require("./passport-config");

const app = express();
const PORT = process.env.PORT || 3000;

//This makes req.body.username work
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.static("public"));
initalizePassport(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

//Routes
app.get("/", (req, res, next) => {
  res.status(200).send("Hello world");
});
app.use("/register", require("./routes/register.js"));
app.use("/login", require("./routes/login.js"));
app.use("/logout", require("./routes/logout.js"));
app.use("/journal-entries", require("./routes/journal-entries.js"));
app.use("/summary", require("./routes/summary.js"));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Running AVranas Fitness Journal - Listening on port ${PORT}`);
});

module.exports = app;
