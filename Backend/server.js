import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import connectToMongoDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js";
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
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
