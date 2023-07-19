require('dotenv').config();

const server = require('./app');
const mongoose = require('mongoose');

server.listen(process.env.PORT || 8081, () => {
    console.log("----------------------------------------\n\t Server iniciado... \n----------------------------------------");
})