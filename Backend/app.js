import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

//App config
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();
connectCloudinary();

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
