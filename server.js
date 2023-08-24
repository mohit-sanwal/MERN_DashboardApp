const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  console.log('test', req, resp);
  resp.send('app is working---')
})


app.listen(3000);





