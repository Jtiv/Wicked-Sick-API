const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Incident = new Schema({
    "id" : Number, 
    "open_date" : String,
    "name" : String, 
    "location" : String,
    "lat" : Number,
    "lon" : Number,
    "threat" : String,
    "tags" : String,
    "commodity" : String,
    "measure_skim" : Boolean,
    "measure_shore" : Boolean,
    "measure_bio" : Boolean,
    "measure_disperse" : Boolean,
    "measure_burn" : Boolean,
    "max_ptl_release_gallons": Number,
    "posts" : Number,
    "description" : String,
});


module.exports =  mongoose.model("Incidents", Incident);


