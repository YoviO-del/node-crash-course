import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// // readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data)

//readFile() - Prmise .then()
// fs.readFile('./test.txt', 'utf8').then((data) => {
//         console.log(data)
//     }).catch((err) => console.log(err))

// readFile() - async/await

const readFile = async () => {
    try {
         const data =  await fs.readFile('./test.txt', 'utf8')
        console.log(data)
    }
    catch{
        console.log(error)
    }
};



//writeFile() 
// If it doesn't exist it'll create it  (Over writing it)
const writeFile = async() => {
    try{
        await fs.writeFile('./test.txt', 'Hello I am writing to this file');
        console.log('File writen to..')
    } catch (error) {
        console.log(error);
    }
}

// appendFile()
const appendFile = async () => {
    try{
        await fs.appendFile('./test.text', '\nThis is appended text')
        console.log('File appended to')
    } catch (error) {
        console.log(error)
    }
}

readFile();
appendFile();
writeFile();