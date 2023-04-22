const router = require("express").Router();
const buyreController = require("../controllers/buyerController");
const Buyer = require("../models/buyer");

// route for add buyer
router.route("/addBuyer").post((req,res) => {
    const response = buyreController.createBuyerController(req.body, res);
});

// route for get one buyer details
router.route("/getBuyer/:id").post((req,res)=>{
    let id = req.params.id;
    let getData = {
        id: id,
        body: req.body,
    };

    const response = buyreController.getOneBuyerController(getData, res);
});

// route for get all buyers
router.route("/getAllBuyers").get((req,res) => {
    const response = buyreController.getBuyerController(req.body.data ,res);
});

module.exports = router;