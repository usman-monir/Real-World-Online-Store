import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import connectToMongoDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from './Middleware/errorMiddleware.js';

dotenv.config()

// connect to Mongo DB
connectToMongoDB()

const PORT = process.env.PORT || 8000
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('API home page')
})

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (req, res) => {
    console.log("App listening on port " + PORT);
});
