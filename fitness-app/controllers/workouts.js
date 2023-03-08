var Workout = require('../models/workout')

module.exports = {
    index,
    new: newWorkout,
    create,
    show,
    delete: deleteWorkout,
    edit,
    update,
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
        res.render('workouts/show', { title: `${workout.title}`, workout } )
    })
}

function deleteWorkout (req, res) {
    Workout.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/workouts')
    })
}

function edit(req, res) {
    console.log(req.params.id)
    Workout.findById(req.params.id)
    .then((workout) => { 
        res.render('workouts/edit', { title: 'Edit Workout Name', workout } )
    })
}

function update(req, res) {
    Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect('/workouts')
    })
}