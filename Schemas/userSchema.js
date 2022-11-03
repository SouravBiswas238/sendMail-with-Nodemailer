const mongoose = require('mongoose');
const { format } = require('date-fns');

const userSchema = mongoose.Schema({
    registrationDate: {
        type: String,
        default: format(new Date(), 'PP'),
    },

    user: {
        type: Object,
        default: '',
    },
    pass: {
        type: String,
        default: '',
    },

});

module.exports = userSchema;
