const mongoose = require('mongoose');

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aqnhgmo.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));


mongoose.connection.on('error', (err) => {
    console.log(`DB connection error: ${err.message}`);
});




