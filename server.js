const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors");

const app = express();

const connectDB = async() => {
  mongoose.connect('mongodb://localhost:27017/e-comm');
  const productSchema = new mongoose.Schema({});
  const product = mongoose.model('product', productSchema);
  const data = await product.find();
  console.log(data);
}

connectDB()

const corsOptions ={
   origin:'*', 
   credentials:true, //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));
app.use(express.json());


app.get('/app', (req, resp) => {
  // console.log('test', req, resp);
  resp.send({data: 'app is working---'})
})


app.listen(5000);





