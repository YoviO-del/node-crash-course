import { error } from 'console';
import fs from 'fs/promises';
import url from 'url'
import path from 'path';
import http from 'http';

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url); //gives file url and turns it into a path
const __dirname = path.dirname(__filename) // gets dir name

const server = http.createServer((req, res) => {
    // res.setHeader('Content-type', 'text/html')
    // res.end('Hello World haha');

    try {
        if (req.method === 'Get'){

            let filePath;
            if(req.url === '/'){
                filePath = path.join(__dirname, 'public', 'index.html')
            } else if(req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html')
            } else{
                throw new Error('Not FOund')
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end();
        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type':'text/plain'})
        res.end('Server Error')
    }

    
 
    
})

server.listen(8000, () => {
    console.log(`server running on port 8000`)
})
