const express = require("express");
const userRoute = express.Router();
const nodemailer = require("nodemailer");




// send mail
router.post("/user", (req, res) => {
    console.log(req.body)
    const { user } = req.body;

    console.log(user);
});


module.exports = userRoute;