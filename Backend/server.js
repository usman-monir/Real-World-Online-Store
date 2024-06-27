import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import connectToMongoDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config()

// connect to Mongo DB
connectToMongoDB()

const PORT = process.env.PORT || 8000
const app = express();

app.use(cors());


app.get('/', (req, res) => {
  res.send('API home page')
  })

// request body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cookie parser
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
