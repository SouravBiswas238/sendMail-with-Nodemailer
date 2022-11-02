const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");




// send mail
router.post("/register", (req, res) => {
    const { user, pass } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: user?.email,
                pass: pass,
            }
        });

        const mailOptions = {
            from: user?.email,
            to: 'souravbiswas427@gmail.com, sourav202030@gmail.com',
            subject: 'This is msg from nodemailer',
            html: '<h1>Congratulation</h1> <h1> You successfully sent Email </h2>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({ status: 201, info })
            }
        })

    } catch (error) {
        console.log("Error 1" + error);
        res.status(401).json({ status: 401, error })
    }
});


module.exports = router;