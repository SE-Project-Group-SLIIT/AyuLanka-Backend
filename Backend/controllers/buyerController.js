const {response} = require("express");
const buyerService = require("../services/buyerService");
const {buyerValidationSchema} = require ("../validations/buyerValidation");

// controller for add buyer
module.exports.createBuyerController = async(req,res) =>{
    try {
        const {error} = buyerValidationSchema(req);
        if(error){
            return res.status(300).send({message: "Vaalidation Failed...!", err: error});
        }

        let serviceResponse = await buyerService.createBuyerService(req);
        if((serviceResponse.msg = "success")){
            // return serviceResponse
            return res.status(200).send({message: "New Buyer Added...!"});
        } else{
            return res.status(300).send({message: "Cannot Add New Buyer...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot Add new Buyer...!", err: err.message});
    }
};

// controller for get one buyer
module.exports.getOneBuyerController = async(req,res) => {
    try {
        let serviceResponse = await buyerService.getOneBuyerService(req);
        if((serviceResponse.msg = "success")){
            // return serviceResponse
            return res.status(200).send({
                message: "Buyer details retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrieve buyer...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot retrive buyer...!", err: err.message}); 
    }
};

// controller for get all buyers
module.exports.getBuyerController = async(req,res) => {
    try {
        let serviceResponse = await buyerService.getBuyerService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "All buyers details retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrive buyers...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot get buyers...!", err: err.message});
    }
}