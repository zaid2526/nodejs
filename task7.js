//1...........
// Node.js uses events heavily and it is also one of the reasons why Node.
// js is pretty fast compared to other similar technologies. As soon as 
// Node starts its server, it simply initiates its variables, 
// declares functions and then simply waits for the event to occur.   
//         In an event-driven application, there is generally a main 
// loop that listens for events, and then triggers a callback function 
// when one of those events is detected.

//2....................
//js is does not wait for any thing,
//js executed the asynchrous code into the synchronous mode with the
//helps of event loop. Node JS Processing model mainly inspired by 
// JavaScript Event-based model with JavaScript callback mechanism.
//  Because of which Node.js can handle more concurrent client requests.


//3..................
// The process.exit() method is used to end the process which is 
// running at the same time with an exit code in NodeJS.


//4.............
// req.url === contain the requests url
//req.headres== return the the headers of the incoming requests.
// req.method== show that what type of is used in the incoming request.
//i.e.  GET,POST,PUT/PATCH or DELETE

const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    let url = req.url;
    // let method = req.method;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>my first Page from node.js</title></head>')
        res.write('<body>')
        res.write('<h1>Welcome to my Node Js project</h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/home') {
        res.write('<html>')
        res.write('<head><title>my first Page from node.js</title></head>')
        res.write('<body>')
        res.write('<h1>Welcome home</h1>')
      
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/about') {
        res.write('<html>')
        res.write('<head><title>my first Page from node.js</title></head>')
        res.write('<body>')
        res.write('<h1>Welcome to About Us page</h1>')
        
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/node') {
        res.write('<html>')
        res.write('<head><title>my first Page from node.js</title></head>')
        res.write('<body>')
        res.write('<h1>Welcome to my Node Js project</h1>')
       
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

        
    // res.write('<html>')
    // res.write('<head><title>my first Page from node.js</title></head>')
    // res.write('<body>')
    // res.write('<h1>hello from first node.js page')
    // res.write('</body>')
    // res.write('</html>')
    // res.end();

})
server.listen(3000);