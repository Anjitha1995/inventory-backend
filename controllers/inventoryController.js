const inventory = require("../model/inventoryData");

exports.getAllProducts = (req, res) => {
    const {category, quantity, search} = req.query;
    let filteredProducts = [...inventory];
       if (search) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description?.toLowerCase().includes(search.toLowerCase())
        );
    }
    if (category) {
        filteredProducts = filteredProducts.filter((product) => 
            product.category?.toLowerCase() === category.toLowerCase()
            
        );
    }
    if (quantity) {
        filteredProducts = filteredProducts.filter((product) =>
            Number(product.quantity) === Number(quantity)
        );
    }


    res.status(200).json({message:"Products Fetched Successfully", data:filteredProducts});
}

exports. createProduct = (req, res) => {
    const {name, price, category, quantity, description} = req.body;
    const newProduct = {
        id: Date.now(),
        name,
        price,
        category,
        quantity,
        description: description || ""
    };
    inventory.push(newProduct);
    res.status(201).json({message: "Product Created", data: newProduct});
}

exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    if (!id || isNaN(id)) { 
        const error = new Error("Id not present");
        error.statusCode = 400;
        throw error;
    }
    const product = inventory.find(product => product.id === id );
    if (!product) {
        const error = new Error("Product not found");
        error.statusCode = 404;
        throw error;
    }
    res.status(200).json({message:"Product Fetched Successfully", data:product});

}

exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);

    if (!id || isNaN(id)) {
        const error = new Error("Invalid product ID");
        error.statusCode = 400;
        throw error;
    }

    const productIndex = inventory.findIndex(p => p.id === id);

    if (productIndex === -1) {
        const error = new Error("Product not found");
        error.statusCode = 404;
        throw error;
    }
    const existingProduct = inventory[productIndex];
    const updatedProduct = {
        ...existingProduct,
        ...req.body,
        id: existingProduct.id // prevent ID overwrite
    };

    inventory[productIndex] = updatedProduct;

    res.status(200).json({
        message: "Product updated successfully",
        product: updatedProduct
    });
};

exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);

    if (!id || isNaN(id)) {
        const error = new Error("Invalid product ID");
        error.statusCode = 400;
        throw error;
    }

    const productIndex = inventory.findIndex(p => p.id === id);

    if (productIndex === -1) {
        const error = new Error("Product not found");
        error.statusCode = 404;
        throw error;
    }

    // Remove product
    const deletedProduct = inventory.splice(productIndex, 1);

    res.status(200).json({
        message: "Product deleted successfully"
    });
};
