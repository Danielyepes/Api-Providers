"use strict";
//get dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
//declare port, this change if there is other service run in this port
const port = 8888;

//imprort model of bd
var Providers = require("./models/providers");
var Specialities = require("./models/specialities");

//add dependencias to app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(500);
  res.render({ error: err });
});

///
/**
 * GET method for get alls record
 */
app.get("/api/providers", (req, res) => {
  Providers.find({}, (err, providersResponse) => {
    if (err)
      return res.status(500).send({ message: `Error making request:${err}` });
    res.status(200).send({ providers: providersResponse });
  });
});

/**
 * GET provider method by ID
 * param providerID is obtain of url
 */
app.get("/api/providers/:providerID", (req, res) => {
  let provider = req.params.providerID;
  Providers.findById(provider, (err, providersResponse) => {
    if (err)
      return res.status(500).send({ message: `Error making request:${err}` });
    if (!providersResponse)
      return res.status(404).send({ message: `provider NO exist` });
    res.status(200).send({ providersResponse });
  });
});

/**
 * POST method for insert a record althougth to json
 *
 */
app.post("/api/providers", (req, res) => {
  console.log(req.body);

  //declare a provider for get JSON data
  let provider = new Providers();
  provider.firstName = req.body.firstName;
  provider.lastName = req.body.lastName;
  provider.middleName = req.body.middleName;
  provider.email = req.body.email;
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

  //
  var speciality = new Specialities();
  //
  specialty.name = req.body.specialty.name;
  specialty.createdBy = req.body.specialty.createdBy;
  specialty.createdAt = req.body.specialty.createdAt;
  specialty.updatedBy = req.body.specialty.updatedBy;
  specialty.updatedAt = req.body.specialty.updatedAt;

  //save specialy in bd
  speciality.save((err, specialityStored) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error making POST request:${err}` });
    res.status(200).send({ speciality: specialityStored });
    //save data get of JSON
    
    provider.specialty._id = specialityStored._id;
    provider.specialty.name = specialityStored.name;
    provider.specialty.createdBy = specialityStored.createdBy;
    provider.specialty.createdAt = specialityStored.createdAt;
    provider.specialty.updatedBy = specialityStored.updatedBy;
    provider.specialty.updatedAt = specialityStored.updatedAt;
    provider.projectedStartDate = specialityStored.StartDate;

    provider.save((err, providerStored) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error making POST request:${err}` });
      res.status(200).send({ provider: providerStored });
    });
  });
});

/**
 * PUt method
 */
app.put("/api/providers/:providerID", (req, res) => {
  let providerId = req.params.providerID;
  let fields = req.body;

  Providers.findByIdAndUpdate(providerId, fields, (err, providerUpdate) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error to delete provider:${err}` });
    res.status(200).send({ providerUpdate });
  });
});

/**
 * Delete method
 */
app.delete("/api/providers/:providerID", (req, res) => {
  let providerId = req.params.providerID;
  //search record
  Providers.findById(providerId, (err, provider) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error to delete provider:${err}` });
    if (!provider)
      return res.status(404).send({ message: "Provider no exist" });

    provider.remove(err => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error to delete provider:${err}` });
      res.status(200).send({ message: "Provider delete success" });
    });
  });
});

//stablish conection with database and init app
mongoose.connect(
  "mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1",
  (err, res) => {
    if (err) {
      console.log("ERROR: connecting to Database. " + err);
    }
    console.log("Conection Success");

    //run app in port
    app.listen(port, () => {
      console.log(`Node server running on http://localhost:${port}`);
    });
  }
);
