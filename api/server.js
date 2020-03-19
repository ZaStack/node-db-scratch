const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const characterRouter = require('../auth/character-router');

server.use(helmet());
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use('/api/characters', characterRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Yep"
    })
})

module.exports = server;
