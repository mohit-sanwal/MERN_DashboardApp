const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require("./db/model/User");
const Product = require("./db/model/Product");
const app = express();
app.use(express.json());

const corsOptions ={
  origin:'*', 
  credentials:true, //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));


app.post('/register', async (req, resp) => {
  // console.log('test', req, resp);
  let user = new User(req.body);
  console.log('user model', user);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  console.log('user model', user);
  resp.send(result)
})


app.post('/login', async (req, resp) => {
   if(req.body.password && req.body.email) {
      let user = await User.findOne(req.body).select("-password");
      if(user) {
        resp.send(user);
      } else{
        resp.send({ result: 'No User Found' })
      }
   } else {
       resp.send({ result: 'No User Found' })
   }
})

app.post('/add-product', async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
})

app.listen(5000);


// const connectDB = async() => {
//   mongoose.connect('mongodb://localhost:27017/e-comm');
//   const productSchema = new mongoose.Schema({});
//   const product = mongoose.model('product', productSchema);
//   const data = await product.find();
//   console.log(data);
// }

// connectDB()
