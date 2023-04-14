const router = require("express").Router();
const SellerController = require("../controllers/sellerController");
const Seller = require("../models/seller");

//route for add employee
router.route("/addSeller").post((req, res) => {
  const response = SellerController.createSellerController(req.body, res);
});

module.exports = router;