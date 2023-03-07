var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts')

/* GET users listing. */
router.get('/', workoutsCtrl.index)
router.get('/new', workoutsCtrl.new)
router.post('/', workoutsCtrl.create)
router.get('/:id', workoutsCtrl.show)
router.delete('/:id', workoutsCtrl.delete)
router.get('/:id/edit', workoutsCtrl.edit)
router.put('/:id/', workoutsCtrl.update)

module.exports = router;