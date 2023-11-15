const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const mongoose = require("mongoose");
dotenv.config();
const MongoStore = require("connect-mongo");
const cors = require("cors");
const app = express();
const session = require("express-session");

// require("./config/passport")(passport);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("DB Connected")
);


app.use('/api/code', require('./routes/code'))
app.use('/api/problem', require('./routes/problem'))
app.use('/api/auth', require('./routes/auth'))

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/failed",
//   }),
//   (req, res) => {
//     res.redirect("http://localhost:3000/");
//   }
// );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is listening"));

