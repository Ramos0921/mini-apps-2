const path = require('path');
const SRC = path.join(__dirname+'/client');
const  DEST = path.join(__dirname+'/public');

module.exports={
 entry:`${SRC}/index.jsx`,
 output:{
   filename:'bundle.js',
   path: DEST,
 },
 module:{
   rules:[
     {
      test:[/\.jsx$/],
      exclude:/node_modules/,
      loader:'babel-loader',
      query:{
        presets:['env','react'],
      }
     }
  ],
 },

}