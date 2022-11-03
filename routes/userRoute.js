const express = require('express');
const { postUserInfo, getAllUser, postEmail } = require('../controller/userControler');
const router = express.Router();

const nodemailer = require("nodemailer");



// post user info
router.post('/', postUserInfo);
router.post('/email', postEmail);

router.get('/', getAllUser);




module.exports = router;