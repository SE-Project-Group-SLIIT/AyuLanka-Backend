const { response } = require("express");
const mongoose = require("mongoose");
let Seller = require("../models/seller");
const cloudinary = require('../utils/cloudinary');

//create Seller service for add Seller
module.exports.createSellerService = async (req, res) => {
  try {
    console.log(req)
    const sellerName = req.SellerName;
    const shopName = req.ShopName;
    const Address = req.ShopAddress;
    const Email = req.Email;
    const mobileNumber = req.MobileNumber;
    const image = req.image;
    const secondAddress = req.SecondShopAddress;
    const Country = req.SelectCountry;
    const State = req.NewSelectState;
    const ZipCode = req.ZipCode;

    const result = await cloudinary.uploader.upload(image, {
      folder: "products",
      // width: 300,
      // crop: "scale"
    })

    const newSeller = new Seller({
      sellerName,
      shopName,
      shopAddress:{
        Address:Address,
        secondAddress:secondAddress,
        Country: Country,
        State:State,
        ZipCode:ZipCode,
      },
      Email,
      mobileNumber,
      shopCoverImage : {
          public_id: result.public_id,
          url: result.secure_url
      },
    });
    let reponse = await newSeller.save();

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

module.exports.getOneSellerService = async (req, res) => {
  try {
    let id = req.id;

    let response = await Seller.find({ _id: id });

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
  } catch (err) {
    throw err;
  }
};
