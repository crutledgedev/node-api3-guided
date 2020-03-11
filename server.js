const express = require('express'); // importing a CommonJS module

const hubsRouter = require('./hubs/hubs-router.js');


//define the middleware 
const server = express();  
const morgan = require('morgan');
const helmet = require('helmet');


//global middleware
//declare the use pay attention to docs for syntax
server.use(helmet());  //sets headers and calls next it's what helmet does to mask information?
server.use(morgan("short"));//morgan sets request headers and then calls next and logs stuff
server.use(logger); //see below logger function console logs information from the request for us 
server.use(express.json()); //built in middleware, no need to npm install  || reads body, parses in json, puts object in req.body





server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome ${nameInsert}, to the Lambda Hubs API</p>
    `);
});

//three Amigas - three homies
//req, res, next (nancy)

function logger(req, res, next) {
    //log information about the request to the console -> GET to /
    const method = req.method; //reading information from the request
    const endpoint = req.originalUrl;
    
    console.log(`${method} to ${endpoint}`); //writing the request information/endpoint to console
    next();//calling the next middleware below it
}



module.exports = server;
