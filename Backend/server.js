const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '50mb'}));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
//connect database
connection.once("open", () => {
  console.log("Mongodb Connection Success !" , PORT);
});

const sellerRouter = require("./routes/sellerRoutes");
const productRouter = require("./routes/productRoutes");
const orderRouter = require("./routes/orderRoutes")
const paymentRouter = require("./routes/paymentRoutes")
const cartRoutes = require("./routes/cartRoutes")

app.use("/seller",sellerRouter);
app.use("/product",productRouter);
app.use("/order", orderRouter)
app.use("/payment", paymentRouter)
app.use("/cart",cartRoutes)

app.listen(PORT, () => {
    console.log(`server is up and running on port: ${PORT}`);
})