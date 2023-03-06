var Workout = require('../models/workout')

module.exports = {
    index,
    new: newWorkout,
    create,
    show,
}

function index(req, res) {
    Workout.find({})
    .then(workouts => {
        res.render('workouts/index', { title: 'Workouts', workouts } )
    })
}

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'New Workout' } )
}

function create(req, res) {
    var workout = new Workout(req.body)
    if (req.body.date===''){
        workout.date=undefined
    }
    workout.save()
    .then(() => res.redirect('/workouts'))
}

function show(req, res) {
    Workout.findById(req.params.id)
    .then(workout => {
        res.render('workouts/show', { title: `${workout.name}`, workout } )
    })
}