import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer((async (req, res) => {
    
    let filePath;

    //originally was text but changed to application
    

    

    try {
        //res.writeHead(200, {'Content-Type': 'text/json'})

        if(req.method === 'GET'){
            if(req.url === '/') {
                // I looked at past file for this
                filePath = path.join(__dirname,'pages', 'welcome.txt')
            } else if(req.url === '/about'){
                filePath = path.join(__dirname,'pages', 'about.txt')
            } else if (req.url === '/todos'){
                filePath = path.join(__dirname,'pages', 'todos.json')
            } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Route not found');
            }
            const data = await fs.readFile(filePath,'utf8')
            res.writeHead(200, {'Content-Type': 'text/json'})
            res.write(data);
        }  else {
            throw new Error('Method not allowed')
        }
    } catch (err) {
        console.error(err)
    }

    res.end()
})).listen(5000);
// looked at documentation for .listen();

