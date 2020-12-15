const express = require('express');
const router = express.Router();

const Squad = require('../model/squad');

router.route('/squad').post( (req,res) => {
    let squad = new Squad(req.body);
    squad.save()
    .then( data => res.send(data) )
    .catch(err=> res.status(400).send('Failed to store in database'))
});

router.route('/squad').get( (req,res) => {
    Squad.find((err,data) => {
        if(err) res.status(400).send('Failed to get from the database',err);
        else{
            res.send(data);
        }
    })
});

router.route('/squad/:id').get( (req,res) => {
    Squad.findOne({"_id":req.params.id},(err,data) => {
        if(err) res.status(400).send('Failed to get from the database',err);
        else{
            res.send(data);
        }
    })
});

router.route('/squad/:id').put( (req,res) => {
    Squad.updateOne({"_id":req.params.id},req.body,(err,data) => {
        if(!err) res.send('Updated');
        else{
            return res.status(500).json({ errorMessage: "There was error while UPDATING the data to the database." })
        }
    })
});

router.route('/squad/:id').delete( (req,res) => {
    Squad.deleteOne({"_id":req.params.id},(err,data) => {
        if(!err) res.send('Deleted');
        else{
            return res.status(500).json({ errorMessage: "There was error while DELETING the data to the database." })
        }
    })
})

module.exports = router;