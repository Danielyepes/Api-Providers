("use strict");

var mongose = require("mongoose");
var Schema = mongose.Schema;

ObjectId = Schema.ObjectId;
//create schema for providers
var Providers = Schema(
  {
    _id: ObjectId,
    firstName: String,
    lastName: String,
    middleName: String,
    email: String,
    specialty: {
      _id: ObjectId,
      name: String,
      createdBy: Number,
      createdAt: Date,
      updatedBy: Number,
      updatedAt: { type: Date, default: Date.now }
    },
    projectedStartDate: Date,
    employerId: Number,
    providerType: String,
    staffStatus: String,
    assignedTo: Number,
    status: String,
    createdBy: Number,
    createdAt: Date,
    updatedBy: Number,
    updatedAt: { type: Date, default: Date.now }
  },
  { versionKey: false } //to not add field "_v" in json
);

module.exports = mongose.model("Providers", Providers);
