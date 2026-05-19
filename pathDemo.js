import path from 'path';
import url from 'url';


const filePath = './dir1/dir2/test.txt';

//basename() Returns the last portion of a file
console.log(path.basename(filePath))

console.log(path.dirname(filePath))

console.log(path.extname(filePath))


// parse()
console.log(path.parse(filePath))

const __filename = url.fileURLToPath(import.meta.url)  // gives file path
const __dirname = path.dirname(__filename)

console.log(__filename)

//join()
const filePath2 = path.join(__dirname,'dir1','dir2','test.txt')
console.log(filePath2)


// resolve()
const filePath3 = path.resolve(__dirname,'dir1','dir2','test.txt')
console.log(filePath3)