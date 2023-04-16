const { response } = require("express");
const mongoose = require("mongoose");
let Product = require("../models/product");

//create Product service for add Product
module.exports.createProductService = async (req, res) => {
  try {   
    const productName = req.productName;
    const productCode = req.productCode; 
    const shop = req.shop;   
    const productPrice = Number(req.productPrice);
    const productDiscount = Number(req.productDiscount);  
    const productQuantity = Number(req.productQuantity);
    const productDescription = req.productDescription;
    const productCategory = req.productCategory;

    const newProduct = new Product({
      productName,
      productCode,
      shop, 
      productPrice, 
      productDiscount,
      productQuantity,
      productDescription,
      productCategory,
    });
    let reponse = await newProduct.save();

    if (reponse) {
      return {
        msg: "success",
        data: reponse,
      };
    } else {
      msg: "failed";
      data: reponse;
    }
  } catch (err) {
    throw err;
  }
};

//view product service for view all product details
module.exports.viewProductService = async (req, res) => {
    try {
      let response = await Product.find();
  
      if (response) {
        return {
          msg: "success",
          data: response,
        };
      } else {
        return {
          msg: "faild",
          data: response,
        };
      }
    } catch {
      throw err;
    }
  };

  //view product service for view each seller product details
module.exports.viewSellerProductService = async (req, res) => {
    try {

      let id = req.id;
      let response = await Product.find({ shop: id });
  
      if (response) {
        return {
          msg: "success",
          data: response,
        };
      } else {
        return {
          msg: "faild",
          data: response,
        };
      }
    } catch {
      throw err;
    }
  };
  