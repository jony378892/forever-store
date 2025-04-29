# E-Commerce Project

## Overview

This project is a fully functional e-commerce platform designed to provide a seamless shopping experience for users. It includes features for customers, administrators ensuring a comprehensive solution for online retail.

## Live Demo

Check out the live version of the project [here](https://frontend-git-main-jonys-projects-c5f2d040.vercel.app).

## Features

### User Features

- **User Authentication**: Secure login and registration system with password encryption.
- **Product Browsing**: Search, filter, and sort products by categories, price, and ratings.
- **Product Details**: View detailed product descriptions, images, and reviews.
- **Shopping Cart**: Add, update, or remove items from the cart.
- **Wishlist**: Save favorite products for future purchases.
- **Order Management**: Place orders, view order history, and track order status.
- **Reviews and Ratings**: Leave reviews and rate purchased products.

### Admin Features

- **Dashboard**: Overview of sales, orders, and user activity.
- **Product Management**: Add, update, or delete products with images and descriptions.
- **Order Management**: View and update the status of customer orders.
- **User Management**: Manage user accounts and permissions.
- **Reports**: Generate sales and performance reports.

### Vendor Features (if applicable)

- **Vendor Dashboard**: Manage products and view sales performance.
- **Product Listings**: Add and manage product inventory.
- **Order Fulfillment**: View and process customer orders.

### Additional Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Payment Integration**: Support for multiple payment gateways (e.g., PayPal, Stripe).
- **Notifications**: Email and in-app notifications for order updates and promotions.
- **Security**: Implementation of secure coding practices to protect user data.
- **Multi-language Support**: Option to switch between different languages.
- **Promotions and Discounts**: Apply coupon codes and view ongoing promotions.

## Default Credentials

For testing purposes, you can use the following credentials:

- **Admin Account**:
  - Email: `admin@email.com`
  - Password: `12345678`

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jony378892/e-commerce.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend/
   ```
3. Install dependencies for the frontend:
   ```bash
   pnpm install
   ```
4. Start the frontend development server:

   ```bash
   pnpm run dev
   ```

   The frontend will be available at [http://localhost:5173](http://localhost:5173).

5. Navigate to the backend directory:
   ```bash
   cd backend/
   ```
6. Install dependencies for the backend:
   ```bash
   pnpm install
   ```
7. Start the admin development server:
   ```bash
   pnpm run dev
   ```
   The admin panel will be available at [http://localhost:5174](http://localhost:5174).

## Technologies Used

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens), bcrypt
- **validation**: Zod
- **Payment Integration**: Stripe, Cash on delivery

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
