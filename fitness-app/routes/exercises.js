var express = require('express');
var router = express.Router();
var exercisesCtrl = require('../controllers/exercises')

/* GET users listing. */
router.get('/workouts/:id/exercises/new', exercisesCtrl.new)
router.post('/workouts/:id/exercises/', exercisesCtrl.create)
router.delete('/workouts/:wid/exercises/:eid', exercisesCtrl.delete)
router.get('/workouts/:wid/exercises/:eid/edit', exercisesCtrl.edit)
router.put('/workouts/:wid/exercises/:eid', exercisesCtrl.update)

module.exports = router;