const fs = require('fs');

const requestHandler = (req, res) => {
    // console.log(req.url, req.method, req.headers);
    let url = req.url;
    let method = req.method;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>my first Page from node.js</title></head>')
        res.write('<body>')
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text"name="message"></input>')
        // res.write('<input type="text" name="message1"></input>')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        // fs.writeFileSync('message.txt','DUMMY')
        const body = [];
        req.on('data', (chunks) => {
            console.log("chunks...", chunks);
            body.push(chunks);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log("pasreBody....", parseBody);
            const message = parseBody.split('=')[1];
            // fs.writeFileSync('message.txt', message);
            fs.writeFile('message.txt', message, err => {
                console.log("error", err);
                const data = fs.readFileSync('./message.txt', { encoding: 'utf8' })
                console.log("data", data);
                res.write('<html>')
                res.write('<head><title>my first Page from node.js</title></head>')
                res.write('<body>')
                res.write(`<h1> ${data}</h1>`)
                res.write('<form action="/message" method="POST">')
                res.write('<input type="text"name="message"></input>')
                // res.write('<input type="text" name="message1"></input>')
                res.write('<button type="submit">Send</button>')
                res.write('</form>')
                res.write('</body>')
                res.write('</html>')
                return res.end();

                
            })
            

            // res.write(`<h1>${data}</h1>`)
            //  res.end(`<h1>${data}</h1>`);
            //  

        });

    }
    res.write('<html>')
    res.write('<head><title>my first Page from node.js</title></head>')
    res.write('<body>')
    res.write('<h1>hello from first node.js page')
    res.write('</body>')
    res.write('</html>')
    res.end();

}

module.exports = {
    handler: requestHandler,
    someText: 'some hard coded text'
}

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';



// //........with sync write
// return req.on('end', () => {
//     const parseBody = Buffer.concat(body).toString();
//     console.log("pasreBody....", parseBody);
//     const message = parseBody.split('=')[1];
//     // fs.writeFileSync('message.txt', message);
//     fs.writeFileSync('message.txt', message, err => {
//         console.log("error", err);
        
//     })
//     const data = fs.readFileSync('./message.txt', { encoding: 'utf8' })
//         console.log("data", data);

//         res.write('<html>')
//         res.write('<head><title>my first Page from node.js</title></head>')
//         res.write('<body>')
//         res.write(`<h1> ${data}</h1>`)
//         res.write('<form action="/message" method="POST">')
//         res.write('<input type="text"name="message"></input>')
//         // res.write('<input type="text" name="message1"></input>')
//         res.write('<button type="submit">Send</button>')
//         res.write('</form>')
//         res.write('</body>')
//         res.write('</html>')


//         res.end();


//     // res.write(`<h1>${data}</h1>`)
//     //  res.end(`<h1>${data}</h1>`);
//     //  

// });

