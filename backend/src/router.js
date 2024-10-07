const express = require('express');

const tasksController = require('./controllers/tasksController');

const router = express.Router();

router.get('/tasks', tasksController.getALL);
router.post('/tasks', tasksController.createTask);

module.exports = router;