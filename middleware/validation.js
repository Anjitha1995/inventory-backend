exports.validateInventory = (req, res, next) => {
  const { name, price, quantity, category } = req.body;

  // Basic validation
  if (!name || price == null || quantity == null || !category) {
    return res.status(400).json({
      success: false,
      message: "Name, price, category and quantity of the product are required"
    });
  }

  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be a positive number"
    });
  }

  if (typeof quantity !== "number" && quantity < 0) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be a positive number"
    });
  }

  next();
};

exports.validateInventoryOnUpdate = (req, res, next) => {
  const {  price, quantity } = req.body;


  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be a positive number"
    });
  }

  if (typeof quantity !== "number" && quantity < 0) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be  a Positive Number"
    });
  }

  next();
};


