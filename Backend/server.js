import express from 'express';
import products from "./products.js";

const PORT = 5000
const app = express();


app.get('/', (req, res) => {
  res.send('API home page')
})

app.get('/products', (req, res) => {
  res.json(products);
})

app.get('/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id)
    res.json(product);
})

app.listen(PORT, (req, res) => {
    console.log("App listening on port " + PORT);
});
