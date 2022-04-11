let express = require('express');
let controller = require('../controller.js');

let router = new express.Router();

// router.get('/', controller.get);
router.post('/incidents', controller.create);
router.get('/incidents', controller.get);
router.get('/incidents/:id', controller.getIncidentById);
router.delete('/incidents/:id', controller.delete);
router.put('/incidents/:id', controller.update);

module.exports = router;
