const express = require('express');

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getALL);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTasks);
router.put('/tasks/:id',
    tasksMiddleware.validateFieldTitle,
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTasks,
);

module.exports = router;