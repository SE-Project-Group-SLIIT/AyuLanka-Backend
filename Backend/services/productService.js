const { response } = require("express");
const mongoose = require("mongoose");
let Product = require("../models/product");
const cloudinary = require('../utils/cloudinary');

//create Product service for add Product
module.exports.createProductService = async (req, res) => {
  try {  
    const productTitle = req.productTitle; 
    const productName = req.productName;
    const productCode = req.productCode; 
    const shop = "6438d8edb14f6a9b1dd11f35";   
    const productPrice = Number(req.productPrice);
    const productDiscount = Number(req.productDiscount);  
    const productQuantity = Number(req.productQuantity);
    const productDescription = req.productDescription;
    const productCategory = req.productCategory;
    const cashOnDelivery = req.cashOnDelivery;
    const image = req.image;
    const productImages = [];

    for(let i=0;i<image.length;i++){ 
      let images = image[i];
      const result = await cloudinary.uploader.upload(images, {
        folder: "products",
      })

      let data = 
        {
          public_id: result.public_id,
          url: result.secure_url
      }
      productImages.push(data);
    }
    
    const newProduct = new Product({
      productTitle,
      productName,
      productCode,
      shop, 
      productPrice, 
      productDiscount,
      productQuantity,
      productDescription,
      productCategory,
      cashOnDelivery,
      productImages,
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
  