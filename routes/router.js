let express = require('express');
let controller = require('../controller.js');

let router = new express.Router();

// router.get('/', controller.get);
router.post('/', controller.create);
router.get('/incidents', controller.get);
router.get('/:id', controller.getIncidentById);
router.delete('/:id', controller.delete);
router.put('/:id', controller.update);

module.exports = router;
