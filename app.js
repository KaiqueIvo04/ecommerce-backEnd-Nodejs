const Express = require('express');

const server = new Express();

//----------------Middlewares------------------

if (process.env.NODE_ENV === 'development') {
    server.use(require('morgan')('dev'));
}

server.use(Express.json());

server.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

server.use(Express.static(`${__dirname}/public`));

/*
server.use('/api/v1/clients', clientRoute);

server.use('api/v1/admins', adminRoute);

server.use('api/v1/products', productRoute);
*/

module.exports = server;