const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));  

let products = [
  { id: 1, name: "Wireless Headphones", price: 1999, image: "https://picsum.photos/200?1", desc: "Best sound quality with noise cancellation." },
  { id: 2, name: "Smart Watch", price: 2999, image: "https://picsum.photos/200?2", desc: "Fitness tracking + calls." },
  { id: 3, name: "Laptop Stand", price: 999, image: "https://picsum.photos/200?3", desc: "Strong aluminium stand." }
];
let users = [];
let orders = [];

app.get('/api/products', (req,res) => res.json(products));
app.get('/api/products/:id', (req,res) => res.json(products.find(p=>p.id==req.params.id)));
app.post('/api/register', (req,res) => { users.push(req.body); res.json({message:"Registered"}); });
app.post('/api/orders', (req,res) => { orders.push({...req.body, id: orders.length+1}); res.json({message:"Order Placed!"}); });

app.listen(3000, () => console.log("Shop running at http://localhost:3000"));