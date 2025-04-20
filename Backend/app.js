import express, { urlencoded } from "express";
import cors from "cors";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/order.route.js";

const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

//App config
connectDB();
connectCloudinary();

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
