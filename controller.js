let model = require('./models/incidents.js');
let express = require('express');
const { response } = require('./routes/incidentRouter.js');
const req = require('express/lib/request');

let controller = {
  create(request, response) {
    model
      .create(request.body)
      .then(data => response.json(data))
  },
  //define get route
  get(request, response) {
    model
      .find()
      .then(data => response.json(data))

  },
  //define delete route
  delete(request, response) {
    model
      .deleteOne(request.params.id)
  },

  update(request, response) {
    model
      .findOneAndUpdate(request.params.id, request.body)
      .then(data => response.json(data))

  },
  getIncidentById(request, response) {
    model
      .findById(request.params.id)
      .then(data => response.json(data))

  }
};


module.exports = controller
