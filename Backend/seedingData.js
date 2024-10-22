import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectToMongoDB from "./config/db.js";

dotenv.config();
connectToMongoDB();

const importData = async () => {
  try {
    await destroyData();

    const createdUsers = await User.insertMany(users);
    const adminUserId = createdUsers.filter(user => user.isAdmin)[0]._id;
    const sampleProducts = products.map(product => {
        return {...product, user: adminUserId}
    })

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
