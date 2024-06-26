const express=require('express');
const app=express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
require('dotenv').config();


const categoriesRouter=require('./routes/categories');
const productRouter=require('./routes/products');
const cartsRouter=require('./routes/carts');
const usersRouter=require('./routes/users');

app.use('/categories',categoriesRouter);
app.use('/product',productRouter);
app.use('/carts',cartsRouter);
app.use('/users',usersRouter);
app.use('/uploads', express.static('uploads'));


app.listen(process.env.PORT,()=>{
console.log('server running on port ..',process.env.PORT);
})