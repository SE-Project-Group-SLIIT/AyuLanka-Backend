const {response} = require('express');
const mongoose = require('mongoose');
let Buyer = require('../models/buyer');

// create buyer service for add buyer 
module.exports.createBuyerService = async(req,res) => {
    console.log("add start")
    try{

        const BuyerName = req.BuyerName;
        // const Address = req.Address;
        const DOB = req.DOB;
        const Email = req.Email;
        const MobileNumber = req.MobileNumber;
        const Gender = req.Gender;
        const Password = req.Password;

        const newBuyer = new Buyer({
            BuyerName,
            // Address,
            DOB,
            Email,
            MobileNumber,
            Gender,
            Password,
        });

        let response = await newBuyer.save();

        if(response){
            return{
                msg: 'success',
                data: response,
            };
        } else {
            msg: 'failed';
            data: response;
        }
    }catch(err){
        throw err;
    }
};

