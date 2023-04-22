const {response} = require('express');
const mongoose = require('mongoose');
let Buyer = require('../models/buyer');

// create buyer service for add buyer 
module.exports.createBuyerService = async(req,res) => {
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

// create service for get one buyer using id
module.exports.getOneBuyerService = async(req,res) => {
    try {
        let id = req.id;
        let response = await Buyer.find({_id : id});

        if(response){
            return{
                msg: "success",
                data: response,
            };
        } else {
            return{
                msg: "faild",
                data: response,
            };
        }
    } catch (err) {
        throw err;
    }
};

// create service for get all buyers
module.exports.getBuyerService = async(req,res) => {
    try {
        let response = await Buyer.find();

        if (response) {
            return{
                msg: "success",
                data: response,
            };
        } else {
            return{
                msg: "faild",
                data: response,
            }
        }
    } catch (err) {
        throw err;
    }
}