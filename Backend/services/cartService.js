const { response } = require("express");
const mongoose = require("mongoose");
const Cart = require("../models/cart");

module.exports.addToCart = async (req,res) => {
    try {

    const cartID = req.cartID;
    const cartQuantity = req.cartQuantity;
    const itemId = req.itemId;

      const newCartItem = new Cart({
        cartID,
        cartQuantity,
        itemId
      });
      
      const cartItem = await newCartItem.save();
  
      return {
        msg: "success",
        data: response,
      };
    } catch (err) {
      throw err;
    }
  };


  //view Cart service for view all CArt details
module.exports.viewCartService = async (req, res) => {
    try {
      let response = await Cart.find();
  
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


  module.exports.deleteCartItemService = async (req,res) => {
    try {
        console.log("request",req)
      let response = await Cart.findOneAndDelete(
        { itemId:req.itemId },
        
      );
  
      if (response) {
        return {
          msg: "success",
          data: response,
        };
      } else {
        return {
          msg: "fail",
          data: null,
        };
      }
    } catch (err) {
      throw err;
    }
  };
  