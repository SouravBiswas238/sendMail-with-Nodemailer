const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");



// send mail

router.post("/register", (req, res) => {

    const { user, pass } = req.body;
    console.log(user, pass)

});


module.exports = router;