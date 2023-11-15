const router = require('express').Router()
const passport = require("passport");

// Auth related
router.get("/google",(req,res)=>{ 
res.status(200).json({
  _id: "admin",
  googleId: "admin",
  displayName: "admin",
  image: "admin"
})
});



router.get("/success", (req, res) => {
  res.status(200).json({
    _id: "admin",
    googleId: "admin",
    displayName: "admin",
    image: "admin"
  });
});

// router.get("/logout", (req, res) => {
//   req.logout(err => {
//     return res.status(200).json({})
//   })
// });

module.exports = router