require('./config/mongo');
const express = require('express');
const server = express();

const lesson = require('./routes/lessonRouter');
const squad = require('./routes/squadRouter');

server.use(express.json());
server.listen(3000,console.log('Server started at port 3000'));

server.use('/api',lesson);
server.use('/api',squad);