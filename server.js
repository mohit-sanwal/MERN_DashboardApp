const express = require('express');
const cors=require("cors");

const app = express();

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





