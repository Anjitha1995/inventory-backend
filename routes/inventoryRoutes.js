const express = require("express");
const router = express.Router();
const {validateInventory, validateInventoryOnUpdate} = require("../middleware/validation");
const { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } = require("../controllers/inventoryController");

router.route("/")
    .get(getAllProducts)
    .post(validateInventory, createProduct);
router.route("/:id")
    .get(getProductById)
    .put(validateInventory, updateProduct)
    .delete(deleteProduct)
    .patch(validateInventoryOnUpdate, updateProduct);

module.exports = router;