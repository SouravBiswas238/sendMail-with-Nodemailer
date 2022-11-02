const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const router = require("./routes/router")
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())


app.use('/', router);



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})