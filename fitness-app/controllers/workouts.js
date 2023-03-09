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
    if (req.body.date===''){
        req.body.date=undefined
    } else {
        // from GA note
        const s = req.body.date
        req.body.date = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
    }
    var workout = new Workout(req.body)
    workout.save()
    .then(() => res.redirect('/workouts'))
    .catch((err) => {
        console.log(err)
        res.redirect(`/workouts`)
    })
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
    Workout.findById(req.params.id)
    .then((workout) => { 
        res.render('workouts/edit', { title: 'Edit Workout Name', workout } )
    })
}

function update(req, res) {
    if (req.body.date===''){
        req.body.date=undefined
    } else {
        // from GA note
        const s = req.body.date
        req.body.date = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
    }
    Workout.findByIdAndUpdate(req.params.id, req.body)
    .then((workout) => {
        res.redirect('/workouts')
    }).catch((err) => {
        console.log(err)
        res.redirect(`/workouts`)
    })
}