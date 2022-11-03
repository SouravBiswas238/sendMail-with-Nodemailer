const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const router = require("./routes/router");
const userRoute = require('./routes/userRoute');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

// Connect Database with mongoose
require('./database');



app.use(router);

app.use('/user', userRoute);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})