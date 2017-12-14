("use strict");

var mongose = require("mongoose");
var Schema = mongose.Schema;

ObjectId = Schema.ObjectId;
//create schema for Specialities

var Specialities = Schema(
  {
    name: String,
    createdBy: Number,
    createdAt: Date,
    updatedBy: Number,
    updatedAt: { type: Date, default: Date.now }
  },
  { versionKey: false } //to not add field "_v" in json
);

models.export = mongose.model("Specialities", Specialities);;
