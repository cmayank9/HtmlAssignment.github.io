const http= require('http');

const route=require('./Route/route');
const server=http.createServer(route);
server.listen(3000);