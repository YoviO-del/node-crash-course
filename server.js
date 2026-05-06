import { error } from 'console';
import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404;

    // console.log(req.url);
    //this is the path the user is requesting on your server.

    // console.log(req.method);
    //tells you what kind of action the client wants to perform.


    try{
        if(req.method === 'GET'){
            let filepath;
            if(req.url === '/'){
                filepath = path.join(__dirname, 'public', 'index.html')
            } else if(req.url === '/about'){
                filepath = path.join(__dirname, 'public', 'about.html')
            } else {
                throw new Error('Not Found')
            }

            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type','text/html')
            res.write(data)
            res.end();
        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('Server Error')
    }

    // res.writeHead(200, {'Content-Type': 'text/html'})
    // “Here’s the status + info about the response”
    // res.end('<h1>Hello World</h1>')
    //This is the actual content (response body) you’re sending back to the client.
});


server.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
});