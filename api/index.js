const express = require("express");
const app = express();
const inventoryRoutes = require("../routes/inventoryRoutes");
const errorHandler = require("../middleware/errorHandler");

require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/inventory", inventoryRoutes)

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;