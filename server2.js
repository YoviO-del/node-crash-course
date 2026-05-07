import { log } from 'console';
import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Doe' },
];

//Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
}

// jSON middleware

const jsonMiddleWare = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.end(JSON.stringify(users));
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if(user){
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify({id: 1, name: 'John Doe'}))
        res.end()
    }
}

// Route handler for POST /api/users
const createUserHandler = (req,res) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    })

    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser))
        res.end();
    })
}
// Not Found handler
const notFoundHandler = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
}

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleWare(req, res, () => {
        if(req.url === '/api/users' && req.method === 'GET'){
            getUsersHandler(req, res)
        } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
            getUserByIdHandler(req, res);
        } else if(req.url === '/api/users' && req.method === 'POST') {
            createUserHandler(req, res)
        }else {
            notFoundHandler(req, res);
        }
    })
  })

  
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});



