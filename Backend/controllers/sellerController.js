const { response } = require("express");
const SellerService = require("../services/sellerService");


//controller for add employee
module.exports.createSellerController = async (req, res) => {
  try {
    
    let serviceResponse = await SellerService.createSellerService(req);
    if ((serviceResponse.msg = "success")) {
      // return serviceResponse
      return res.status(200).send({ message: "New Seller is added" });
    } else {
      return res.status(300).send({ message: "Cannot add new Seller !" });
    }
  } catch (err) {
    return res
      .status(300)
      .send({ message: "Cannot add new Seller !", err: err.message });
  }
};