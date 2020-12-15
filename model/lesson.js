const mongoose = require('mongoose'),Schema = mongoose.Schema;

const lessonSchema = new Schema({
    name:String
})

const lesson = mongoose.model('lesson',lessonSchema);

module.exports = lesson;