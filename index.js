'use strict'
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 8888;

//imprort model of bd
var Providers = require("./models/providers");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * GET method for get alls record
 */
app.get("/api/providers",(req,res)=>{
  Providers.findById({},(err,providers)=>{
    if(err) res.status(500,{message:`Error making request:${err}`})
    res.send(200,providers)
  })
})

mongoose.connect(
  "mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1",
  (err, res) => {
    if (err) {
      console.log("ERROR: connecting to Database. " + err);
    }
    console.log("Conection Success")

    app.listen(port, () => {
      console.log(`Node server running on http://localhost:${port}`);
    });
  }
);