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