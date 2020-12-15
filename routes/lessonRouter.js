const express = require('express');
const router = express.Router();

var Lesson = require('../model/lesson');

router.route('/lesson').post( (req,res) => {
    var lesson = new Lesson(req.body);
    lesson.save()
    .then(reg => {
        res.send(reg);
    })
    .catch(err => res.status(400).send('Failed to store in database'));
});

router.route('/lesson').get( (req,res) => {
    Lesson.find((err,data) => {
        if(err) res.status(400).send('Failed to get from the database',err);
        else{
            res.send(data);
        }
    });
})

router.route('/lesson/:id').get( (req,res) => {
    Lesson.findOne({"_id":req.params.id},(err,data) => {
        if(err) res.status(400).send('Failed to get from the database',err);
        else{
            res.send(data);
        }
    })
})

router.route('/lesson/:id').put( (req,res) => {
    Lesson.updateOne({"_id":req.params.id},req.body,(err,data) => {
        if(!err) res.send('Updated');
        else{
            return res.status(500).json({ errorMessage: "There was error while UPDATING the data to the database." })
        }
    })
})

router.route('/lesson/:id').delete( (req,res) => {
    Lesson.deleteOne({"_id":req.params.id},(err,data) => {
        if(!err) res.send('Deleted');
        else{
            return res.status(500).json({ errorMessage: "There was error while DELETING the data to the database." })
        }
    })
})

module.exports = router;