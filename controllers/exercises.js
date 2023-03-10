var Workout = require('../models/workout')

module.exports = {
    new: newExercise,
    create,
    delete: deleteExer,
    edit,
    update,
}

function newExercise(req, res) {
    Workout.findById(req.params.id)
    .then(workout => res.render('exercises/new', { title: 'Add Exercise', workout } ))
}

function create(req, res) {
    Workout.findById(req.params.id)
    .then(workout => {
        workout.exercise.push(req.body)
        workout.save()
        .then(() => res.redirect(`/workouts/${req.params.id}`))
        .catch((err) => {
            console.log(err)
            res.redirect(`/workouts/${req.params.id}`)
        })
    })
}

// Finds index of workout.exercise where the ID is the same from the 
// button click, deletes the item in the arry and saves
function deleteExer (req, res) {
    console.log(req.params)
    Workout.findById(req.params.wid)
    .then(workout => {
        var idx = workout.exercise.findIndex((exer) => {
            if(JSON.stringify(exer._id)===`"${req.params.eid}"`){
                return true
            } 
        })
        workout.exercise.splice(idx, 1)
        workout.save()
        .then(() => res.redirect(`/workouts/${req.params.wid}`))
        .catch((err) => {
            console.log(err)
            res.redirect(`/workouts/${req.params.wid}`)
        })
    })
}

function edit(req, res) {
    var eid = req.params.eid
    var wid = req.params.wid
    Workout.findById(req.params.wid)
    .then(workout => {
        var idx = workout.exercise.findIndex((exer) => {
            if(JSON.stringify(exer._id)===`"${req.params.eid}"`){
                return true
            } 
        })
    var exercise = workout.exercise[idx]
    res.render('exercises/edit', { title: "Edit Exercise Info", exercise, eid, wid, workout } )
    }) 
}

function update(req, res) {
    Workout.findById(req.params.wid)
    .then(workout => {
        var idx = workout.exercise.findIndex((exer) => {
            if(JSON.stringify(exer._id)===`"${req.params.eid}"`){
                return true
            } 
        })
        workout.exercise[idx]=req.body
        workout.save()
        .then(() => res.redirect(`/workouts/${req.params.wid}`))
        .catch((err) => {
            console.log(err)
            res.redirect(`/workouts/${req.params.wid}`)
        })
    })
}