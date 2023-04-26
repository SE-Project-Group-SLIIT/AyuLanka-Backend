const router = require("express").Router();
const CartController =require("../controllers/cartController");

router.route("/addItem").post((req, res) => {
    const response = CartController.addItemToCartController(req.body, res);
});

  //route for view Product
router.route("/viewCart").get((req, res) => {
    const response = CartController.viewCartController(
      req.body.data,
      res
    );
  });

  
  router.route("/updateItem").put((req, res) => {
    
    const response = CartController.updateCartItemController(req.body, res);

  });

  router.route("/deleteItem").delete((req, res) => {
    
    const response = CartController.deleteCartItemController(req.body, res);

  });

  

module.exports = router;