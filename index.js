"use strict";
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
app.get("/api/providers", (req, res) => {
  Providers.find({}, (err, providersResponse) => {
    if (err) res.status(500).send({ message: `Error making request:${err}` });
    res.status(200).send({ providers: providersResponse });
  });
});

/**
 * GET provider method by ID
 */
app.get("/api/providers/:providerID", (req, res) => {
  let provider = req.params.providerID;
  Providers.findById(provider, (err, provider) => {
    if (err) res.status(500).send({ message: `Error making request:${err}` });
    if (!provider) res.status(404).send({ message: `provider NO exist` });
    res.status(200).send({ provider });
  });
});


/**
 * POST method for insert a record althougth to json
 *
 */
app.post("/api/providers", (req, res) => {
  console.log(req.body);

  let provider = new Providers();
  provider.firstName = req.body.firstName;
  provider.lastName = req.body.lastName;
  provider.middleName = req.body.middleName;
  provider.email = req.body.email;
  provider.specialty._id = req.body.specialty._id;
  provider.specialty.name = req.body.specialty.name;
  provider.specialty.createdBy = req.body.specialty.createdBy;
  provider.specialty.createdAt = req.body.specialty.createdAt;
  provider.specialty.updatedBy = req.body.specialty.updatedBy;
  provider.specialty.updatedAt = req.body.specialty.updatedAt;
  provider.projectedStartDate = req.body.projectedStartDate;
  provider.employerId = req.body.employerId;
  provider.providerType = req.body.providerType;
  provider.staffStatus = req.body.staffStatus;
  provider.assignedTo = req.body.assignedTo;
  provider.status = req.body.status;
  provider.createdBy = req.body.createdBy;
  provider.createdAt = req.body.createdAt;
  provider.updatedBy = req.body.updatedBy;
  provider.updatedAt = req.body.updatedAt;

  provider.save((err,providerStored)=>{
    if (err) res.status(500).send({ message: `Error making POST request:${err}` });
    res.status(200).send({provider:providerStored})
  })
});
//stablish conection with database and init app
mongoose.connect(
  "mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1",
  (err, res) => {
    if (err) {
      console.log("ERROR: connecting to Database. " + err);
    }
    console.log("Conection Success");

    app.listen(port, () => {
      console.log(`Node server running on http://localhost:${port}`);
    });
  }
);
