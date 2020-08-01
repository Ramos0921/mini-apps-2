const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const axios = require('axios');
const cors = require('cors')

const PORT = process.env.PORT || 3000;


app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/public"))

app.get('/',(req,res)=>{
  res.sendStatus(200);
})

app.listen(PORT,()=>{
  console.log(`listening on port: ${PORT}`);
})