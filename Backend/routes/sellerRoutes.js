const router = require("express").Router();
const SellerController = require("../controllers/sellerController");
const Seller = require("../models/seller");

//route for add Seller
router.route("/addSeller").post((req, res) => {
  const response = SellerController.createSellerController(req.body, res);
});

router.route("/getSeller/:id").post((req, res) => {
    let id = req.params.id;
  
    let searchData = {
      id: id,
      body: req.body,
    };
  
    const response = SellerController.getOneSellerController(searchData, res);
  });

module.exports = router;