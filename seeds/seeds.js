require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: "Laptop",
    price: 999.99,
    description: "High performance laptop with 16GB RAM and 512GB SSD.",
    stockQuantity: 10
  },
  {
    name: "Smartphone",
    price: 499.99,
    description: "Latest model smartphone with excellent camera and battery life.",
    stockQuantity: 25
  },
  {
    name: "Wireless Headphones",
    price: 199.99,
    description: "Noise cancelling wireless headphones with 20 hours battery life.",
    stockQuantity: 15
  },
  {
    name: "Smartwatch",
    price: 149.99,
    description: "Water-resistant smartwatch with fitness tracking features.",
    stockQuantity: 30
  },
  {
    name: "Gaming Mouse",
    price: 59.99,
    description: "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
    stockQuantity: 50
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding products:', error);
    mongoose.disconnect();
  }
}

seedProducts();
