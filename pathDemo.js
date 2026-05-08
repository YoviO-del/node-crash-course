import path from 'path'
import url from 'url'

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath));


//dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filepath))

// parse()
// returns a js object
console.log(path.parse(filePath));

// gives actuall file Path
const __fileName = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)

// join()
// constructs a path
//👉 Think: just glue paths together
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt')


// reslolve()
// 👉 Think: “Where is this file on my system?”
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt')


/**
 * Use join when building relative paths
Use resolve when you need a full path Node can locate from anywhere
 */