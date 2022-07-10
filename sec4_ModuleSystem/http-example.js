const http = require('http');

const req = http.request('http://www.google.com',(res)=>{
      res.on('data',(chunk)=>{
        console.log(`Data Chunk: ${chunk}`);
      });
      res.on('end',()=>{
        console.log('No more data');
      });
});

req.end();