const router = require("express").Router();
const buyreController = require("../controllers/buyerController");
const Buyer = require("../models/buyer");

// routes for add buyer
router.route("/addBuyer").post((req,res) => {
    const response = buyreController.createBuyerController(req.body, res);
});

module.exports = router;