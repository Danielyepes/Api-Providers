("use strict");

var mongose = require("mongoose");
var Schema = mongose.Schema;


var Providers = Schema(
  {
    firstName: String,
    lastName: String,
    middleName: String,
    email: String,
    specialty: {
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
