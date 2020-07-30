const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const moment = require('moment')

var endDate = moment().format('YYYY-MM-DD');
var startDate = moment().subtract(10,'days').format("YYYY-MM-DD");


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+'/public'))

app.get('/data',(req,res)=>{
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
    .then((data)=>{
      res.json(data.data.bpi)
    })
    .catch((err)=>{
      res.send(err)
    })
})
app.get('/data/:id',(req,res)=>{
  var str = req.params.id.split('');
  str.shift();
  var newStr = str.join('');
  var arr = newStr
  var start =arr.split('&')[0]
  var end = arr.split('&')[1]
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
    .then((data)=>{
      res.json(data.data.bpi)
    })
    .catch((err)=>{
      res.send(err)
    })

})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`Listening on port: ${PORT}`)
})
