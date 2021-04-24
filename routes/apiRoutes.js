const router = require('express').Router();
const Workout = require('../models/Workout');

router.get("/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
           // console.log('LOOK HERE  > ' + dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/workouts/:id", (req, res) => {
    Workout.updateOne( //params.id
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    Workout.find({})
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;