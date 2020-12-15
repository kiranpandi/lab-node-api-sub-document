const mongoose = require('mongoose'),Schema = mongoose.Schema;
var Lesson = require('./lesson');

const squadSchema = new Schema({
    name:String,
    lessonId:[{type:mongoose.Types.ObjectId,ref:"Lesson"}],
    cohort:String
})

const squad = mongoose.model('squad',squadSchema);

module.exports = squad;