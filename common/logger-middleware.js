module.exports = function logger(req, res, next) {
    //log information about the request to the console -> GET to /
    const method = req.method; //reading information from the request
    const endpoint = req.originalUrl;
    
    console.log(`${method} to ${endpoint}`); //writing the request information/endpoint to console
    next();//calling the next middleware below it
}
