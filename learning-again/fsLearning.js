import fs from 'fs/promises'
import path from 'path';
import url from 'url'

let id = crypto.randomUUID();
const __filename = url.fileURLToPath(import.meta.url);
// /Users/you/project/app.js


const __dirname = path.dirname(__filename);
// /Users/you/project


const filePath = path.join(__dirname,'todos.json');

async function writeFile(){
    try {
        await fs.writeFile(filePath,'','utf8')
    } catch (err) {
        console.error(err)
    }
}

async function addTodo(duty, isDone){
    try {
        const data = await fs.readFile(filePath,'utf8')
        const readableData = JSON.parse(data);
        

        await fs.writeFile(filePath, JSON.stringify({id: id++, task: duty, done: isDone}))
        
        
        //For stringify args (value, replacer, space)
        // readableData → what you save
        // null → don’t modify/filter it
        // 2 → make it human-readable

        console.log('modifying todo is successful');
    } catch (err) {
        console.error(err)
    }
}

async function readTodos(){
    try {
        const data = await fs.readFile(filePath,'utf8')
        const readableData = JSON.parse(data);
        

        console.log(`${JSON.stringify(readableData, null, 2)} \nData from your todos is given here`);
    } catch (err) {
        console.error(err)
    }
}


async function modifyTodo(argId,property,task) {
    try {

        const data = await fs.readFile(filePath,'utf8')
        const readableData = JSON.parse(data);
        //let modifiedTaskId;

        for(const task of readableData){
            const taskId = task.id
            if(taskId === argId){
                readableData[property] = task;
                await fs.writeFile(filePath,JSON.stringify(readableData, null, 2))
            }
        }

       

    } catch (err) {
        console.error(err)
    }
}


async function main() {
    //await writeFile();
}

main();