const seedModel = require('../models/incidents.js');
const db = require('../db/connection.js');
const seedData = require('./incidents.json');

const seedDatabase = async () => {

    db.dropDatabase();
    await seedModel.insertMany(seedData);
    db.close();

};

seedDatabase();
