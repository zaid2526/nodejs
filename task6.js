//q2 & q3...........
//core module...
//http:-	http module includes classes, methods and events to create Node.js http server.
// url:-	url module includes methods for URL resolution and parsing.
// querystring:-	querystring module includes methods to deal with query string.
// fs:-	fs module includes classes, methods, and events to work with file I/O.
// util:-	util module includes utility functions useful for programmers.

//q4
// absolute path:- is defined as specifying the location of a 
// file or directory from the root directory(/).
//Relative path:- is defined as the path related 
// to the present working directly and never start with a / .

//q5...................
// createServer() method creates an HTTP Server object,that can 
// listen to ports on your computer and execute a function, 
// a requestListener, each time a request is made.

//q6....................
// anonymous function is a function without a name
setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);
//function is passed as a arguments in the setTimeout is 
//the anonymous function.

//q7.......................
// The server.listen() method creates a listener on the specified port.

//Deliverable: 1............

const http=require('http');

const server=http.createServer((req,res)=>{
    res.write('Mohd Zaid....!');
    res.end();
})
server.listen('4000')


//Deliverable: 2............