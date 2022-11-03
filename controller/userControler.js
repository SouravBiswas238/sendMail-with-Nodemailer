const express = require('express');
const mongoose = require('mongoose');
const userSchema = require('../Schemas/userSchema');
const User = new mongoose.model('User', userSchema);
const cron = require('node-cron');





// add a new user

exports.postUserInfo = async (req, res) => {
    try {
        const { user, pass } = req.body;
        const data = await User.create({
            user, pass
        });

        if (data) {

            return res.json({ msg: "user created successfully", updateCount: "1" });
        }

        else return res.json({ msg: "Failed to add user to the database" });
    }
    catch (ex) {
        console.log(ex);
    }
}

exports.postEmail = async (req, res) => {
    const { user, pass } = req.body;

    cron.schedule('* * * * *', function () {
        console.log(user)
        console.log('running a task every minute');
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: user,
                    pass: pass,
                }
            });
            const mailOptions = {
                from: user,
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

}
exports.getAllUser = async (req, res) => {
    const userInfo = await User.find({});
    res.json({
        message: 'successfull',
        status: 200,
        userInfo,
    });
};