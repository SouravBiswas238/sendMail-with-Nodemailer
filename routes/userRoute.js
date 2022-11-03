const express = require('express');
const { postUserInfo, getAllUser } = require('../controller/userControler');
const router = express.Router();




// post user info
router.post('/', postUserInfo);

router.get('/', getAllUser);




module.exports = router;