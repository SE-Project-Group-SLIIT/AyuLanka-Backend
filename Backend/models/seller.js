const mongoose =require("mongoose");

const Schema =mongoose.Schema;

const seller = new Schema({
    sellerName : {
        type : String,
        maxlength: 100,
        required : true,
        
    },

    shopName:{
        type:String,
        maxlength: 100,
        required : true,
    },

    shopAddress :{
        Address: {
            type: String
        },
        secondAddress : {
            type: String
        },
        Country : {
            type: String
        },
        State: {
            type: String 
        },
        ZipCode: {
            type: String 
        },
    },

    Email :{
        type : String,
        maxlength :50,
        required : true,
    },

    mobileNumber :{
        type :Number,
        maxlength:10,        
        required : true,
    },

    shopCoverImage : {
        public_id: {
            type: String
        },
        url: {
            type: String
        } 
    }


})

const Seller = mongoose.model("Seller" ,seller);
module.exports = Seller;