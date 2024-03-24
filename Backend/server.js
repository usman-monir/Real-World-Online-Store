import express from 'express';
import cors from 'cors';
import products from "./products.js";
import dotenv from "dotenv";
dotenv.config()

const PORT = process.env.PORT || 8000
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('API home page')
})

app.get('/api/products/', (req, res) => {
  res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id)
    res.json(product);
})

app.listen(PORT, (req, res) => {
    console.log("App listening on port " + PORT);
});
