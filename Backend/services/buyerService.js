const {response} = require('express');
const mongoose = require('mongoose');
let Buyer = require('../models/buyer');

// create buyer service for add buyer 
module.exports.createBuyerService = async(req,res) => {
    try{

        const BuyerName = req.BuyerName;
        const DOB = req.DOB;
        const Email = req.Email;
        const MobileNumber = req.MobileNumber;
        const Gender = req.Gender;
        const Password = req.Password;
        const Province = req.Province;
        const City = req.City;
        const Area = req.Area;
        const Address = req.Address;
        const PostalCode = req.PostalCode;

        const newBuyer = new Buyer({
            BuyerName,
            DOB,
            Email,
            MobileNumber,
            Gender,
            Password,
            Province,
            City,
            Area,
            Address,
            PostalCode
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
};

// create service for update selected buyer
module.exports.updateBuyerService = async(req,res) => {
    try {
        let id = req.id;
        let idString = id.toString();

        // destructure
        const {
            BuyerName,
            DOB,
            Email,
            MobileNumber,
            Gender,
            Password,
            Province,
            City,
            Area,
            Address,
            PostalCode
        } = req.body;

        const updateBuyer = {
            BuyerName,
            DOB,
            Email,
            MobileNumber,
            Gender,
            Password,
            Province,
            City,
            Area,
            Address,
            PostalCode
        };

        let response = await Buyer.findByIdAndUpdate(
            {_id: idString},
            updateBuyer
        );

        if (response) {
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