const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buyer = new Schema({

    BuyerName: {
        type: String,
        maxlength: 150,
        required: true,
    },

    // Address: {
    //     type: String,
    //     maxlength: 150,
    //     required: true,
    // },

    DOB: {
        type: Date,
        required: true,
    },

    Email: {
        type: String,
        maxlength: 50,
        required: true,
    },

    MobileNumber: {
        type: Number,
        maxlength: 10,
        required: true,
    },

    Gender: {
        type: String,
        maxlength: 10,
        required: true,
    },

    Password: {
        type: String,
        required:true,
    },

    // ProfilePicture: {

    // }

})

const Buyer = mongoose.model("Buyer", buyer);
module.exports = Buyer;