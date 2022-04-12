const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Incident = new Schema({
  "id": { type: Number, required: true },
  "open_date": { type: String },
  "name": { type: String },
  "location": { type: String },
  "lat": { type: Number },
  "lon": { type: Number },
  "threat": { type: String },
  "tags": { type: String },
  "commodity": { type: String },
  "measure_skim": { type: Boolean },
  "measure_shore": { type: Boolean },
  "measure_bio": { type: Boolean },
  "measure_disperse": { type: Boolean },
  "measure_burn": { type: Boolean },
  "max_ptl_release_gallons": { type: Number },
  "posts": { type: Number },
  "description": { type: String },
});


module.exports = mongoose.model("Incidents", Incident);


