const request = require('./request.js');
const response = require('./response');


function makeRequest(url,data){
     request.send(url,data);
     return response.read();
}


const responseData = makeRequest('https://google.com','Hello');

console.log(responseData);