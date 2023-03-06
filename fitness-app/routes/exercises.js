var express = require('express');
var router = express.Router();
var exercisesCtrl = require('../controllers/exercises')

/* GET users listing. */
router.get('/workouts/:id/exercises/new', exercisesCtrl.new)
router.post('/workouts/:id/exercises/', exercisesCtrl.create)

module.exports = router;