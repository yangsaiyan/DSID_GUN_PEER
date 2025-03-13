'use strict';

const Gun = require('gun');
const http = require('http');

const port = process.env.PORT || 8080; 
const server = http.createServer();

const gun = Gun({
    web: server, 
});

server.listen(port, () => {
    console.log(`GunDB server running on port ${port}`);
});
