var Workout = require('../models/workout')

module.exports = {
    new: newExercise,
    create,
}

function newExercise(req, res) {
    var id = req.params.id
    res.render('exercises/new', { title: 'Add Exercise', id } )
}

function create(req, res) {
    Workout.findById(req.params.id)
    .then(workout => {
        workout.exercise.push(req.body)
        workout.save()
        .then(() => res.redirect(`/workouts/${req.params.id}`))
    })
}