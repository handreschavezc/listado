const express = require('express');
const router = express.Router();
const serverController = require('./serverController')

router.get('/proyectos', serverController.listar)
router.get('/pipelines/:id', serverController.getPipelines)

module.exports = router;