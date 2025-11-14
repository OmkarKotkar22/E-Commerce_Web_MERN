<h1 align="center">🛒 Full-Stack E-commerce Website (MERN)</h1>

<p align="center">
  A modern, feature-rich, and responsive e-commerce platform built using the <b>MERN stack</b> (MongoDB, Express.js, React, Node.js).
  It includes comprehensive sections like product listings, shopping cart management, user authentication, and admin functionalities.
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Tech%20Stack-MERN-1C1C1C?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=282C34" />
  <img src="https://img.shields.io/badge/repo%20size-80%20MB-8A2BE2?style=for-the-badge" />
  <img src="https://img.shields.io/badge/languages-7-FF69B4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/last%20commit-15%20Nov%202025-32CD32?style=for-the-badge" />
  <img src="https://img.shields.io/badge/issues-0%20open-FF4500?style=for-the-badge" />
  <img src="https://img.shields.io/badge/stars-0-FFD700?style=for-the-badge" />
</p>

---

## 🚀 **Project Overview & Features**

This project is a complete e-commerce solution with separate **frontend** and **backend** components.

### 🛍️ **E-commerce Functionality**
- **Product Listing:** View products with details, images, and pricing.
- **Shopping Cart:** Add, remove, and update quantities of items in the cart.
- **User Authentication:** Secure sign-up, login, and profile management (using JWT).
- **Checkout Process:** Simulate or integrate a payment gateway (e.g., Stripe, PayPal).
- **Order Management:** View order history for users.

### 🔑 **Technical Features**
- **Full Responsiveness:** Optimized for desktop, tablet, and mobile viewing.
- **RESTful API:** Clean, scalable API architecture for the frontend to interact with.
- **Component-Based UI:** Built with **React.js** for a modular and maintainable user interface.
- **Centralized State Management:** (If using Redux/Context) Efficient state handling for the application.

---

## 📂 **Project Folder Structure**

The project is structured with a root directory containing the `backend` (Node/Express) and `frontend` (React) directories.

### 1. `frontend` (React Application)
frontend/  
│  ├── public/  
│  ├── favicon.ico  
│  ├── index.html   // Main entry point  
│  ├── logo192.png  
│  ├── logo512.png  
│  └── manifest.json    
│
├── src/  
│    ├── Components/   // Reusable UI components (e.g., Header, ProductCard)  
│    ├── Context/   // For React Context API (e.g., AuthContext, CartContext)   
│    ├── Pages/     // Top-level page components (e.g., Home, Product, Cart)  
│    ├── App.js   // Main component  
│    ├── index.js  // React DOM renderer  
│    ├── index.css    
│    └── ... other files (App.css, logo.svg, etc.)   
│    
├── package.json // Frontend dependencies (react, react-dom, etc.)  
      └── vite.config.js // (or similar config like webpack/craco config)  

### 2. `backend` (Node/Express API)
backend/  
│  ├── upload/   // Directory for static file storage (e.g., product images)  
│  └── images/   
│  
├── .gitignore  
├── index.js   // Main server file (or server.js)  
├── package-lock.json  
└── package.json // Backend dependencies (express, mongoose, etc.)


## 🛠 Tech Stack

### 🚀 Frontend
- <img src="https://img.icons8.com/color/30/react-native.png" width="22" /> **React.js** (Component-based architecture)
- <img src="https://img.icons8.com/fluency/30/javascript.png" width="22" /> **JavaScript (ES6+)**
- <img src="https://img.icons8.com/color/30/css3.png" width="22" /> **CSS3** & **HTML5**
- **React Router** for navigation
- **Axios** for API requests

---

### 🛠 Backend
- <img src="https://img.icons8.com/color/30/nodejs.png" width="22" /> **Node.js** (Runtime Environment)
- <img src="https://img.icons8.com/ios/30/40C057/express-js.png" width="22" /> **Express.js** (Web Framework)
- <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" width="22" /> **MongoDB + Mongoose** (Database & ODM)
- <img src="https://img.icons8.com/ios-filled/30/000000/api.png" width="22" /> **RESTful API**
- **JWT** (JSON Web Tokens) for authentication

---

## ⚙️ **Setup and Installation**

Follow these steps to get the project running on your local machine.

### 1. Clone the repository
```bash
git clone [https://github.com/OmkarKotkar22/E-commerce_MERN_Stack.git](https://github.com/OmkarKotkar22/E-commerce_MERN_Stack.git)
cd E-commerce_MERN_Stack

cd ../frontend
npm install
npm start 
# or npm run dev if you use vite/webpack dev-server

cd backend
npm install
# Create a .env file and add your MongoDB connection string and JWT secret
npm start 
# or npm run dev if you use nodemon
