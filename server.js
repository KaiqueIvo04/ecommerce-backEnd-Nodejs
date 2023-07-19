require('dotenv').config();

const server = require('./src/app');
const mongoose = require('mongoose');

const url_cloud = process.env.DB_URL.replace(
    "<username>",
    process.env.DB_USERNAME
).replace('<password>', process.env.DB_PASSWORD); //Sobrescrever url do banco de dados com o login do admin

mongoose.connect(url_cloud, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Database connected!'));

server.listen(process.env.PORT || 8081, () => {
    console.log("----------------------------------------\n\t Server iniciado... \n----------------------------------------");
})