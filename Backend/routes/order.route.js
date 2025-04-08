import express from "express";

import adminAuth from "../middleware/admin.middleware.js";
import authUser from "../middleware/auth.middleware.js";

import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe } from "../controllers/order.controller.js";

const router = express.Router();

// Admin Features
router.post("/list", adminAuth, allOrders);
router.post("/status", adminAuth, updateStatus);

//Payment Features
router.post("/place", authUser, placeOrder);
router.post("/stripe", authUser, placeOrderStripe);
router.post("/razorpay", authUser, placeOrderRazorpay);

// User Features
router.post("/userOrders", authUser, userOrders);

// Verify payment
router.post("/verifyStripe", authUser, verifyStripe);

export default router;
