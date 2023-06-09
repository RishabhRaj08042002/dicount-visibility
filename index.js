const express = require('express');
const mongoose=require('mongoose')
const config = require('./config.js');

const app=express();
app.use(express.json());

app.get("/discount", async (req, res) => {
    console.log("stage 1");
   
     var dis=config.find( {products });

     console.log(dis);

     if(dis.discount)
     {
        let obj={
            
        }
     }

     

})