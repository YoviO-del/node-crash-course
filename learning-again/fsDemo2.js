// import fs from "fs/promises";

// /**
//  *  Read and write files
//     Create and delete files
//     Append to files
//     Rename and move files
//     Change file permissions
//  */

// /**
//  * Directory operations
//  *  Create and remove directories
//     List directory contents
//     Watch for file changes
//     Get file/directory stats
//     Check file existence
//  */

// async function readFile() {
//   //with async await you need promises and await module
//   //it returns a promise
//   try {
//     const data = await fs.readFile("test.txt", "utf8");
//     //Best Practice: Always specify the character encoding (like 'utf8') when reading text files to get a string instead of a Buffer.
//     console.log("File content:", data);
//   } catch (error) {
//     console.error(error, "File cannot be read");
//   }
// }

// async function writeFile() {
//   try {
//     //writing text
//     await fs.writeFile(
//       "writtenTestFile.txt",
//       "Hey you written a file good job!",
//       "utf8",
//     );

//     const data = {
//       name: "John",
//       age: 18,
//       city: "D.C.",
//     };
//     await fs.writeFile("writeenJSONfile.json", JSON.stringify(data), "utf8");

//     console.log("Files are now written");
//   } catch (err) {
//     console.error("File issue arissen: ", err);
//   }
// }

// async function appendingToFile() {
//   try {
//     await fs.appendFile(
//       "test.txt",
//       "Great you made the file now you are adding to it",
//       "utf8",
//     );
//     console.log("File has now been added to");
//   } catch (err) {
//     console.error("File does not exist", err);
//   }
// }

// // this is like creating my file and writing to it etc in function essentially
// async function writeWithFileHandle() {
//   let fileHandle;

//   try {
//     // Open a file for writing (creates if doesn't exist)
//     fileHandle = await fs.open("output.txt", "w");

//     // Write content to the file
//     await fileHandle.write("First line\n");
//     await fileHandle.write("Second line\n");
//     await fileHandle.write("Third line\n");

//     console.log("Content written successfully");
//   } catch (err) {
//     console.error("Error writing to file:", err);
//   } finally {
//     // Always close the file handle
//     if (fileHandle) {
//       await fileHandle.close();
//     }
//   }

//   /**
//    * 
//      'w' - Open for writing (file is created or truncated)
//      'wx' - Like 'w' but fails if the path exists
//      'w+' - Open for reading and writing (file is created or truncated)
//      'a' - Open for appending (file is created if it doesn't exist)
//      'ax' - Like 'a' but fails if the path exists
//      'r+' - Open for reading and writing (file must exist)
//    */
// }

// async function deleteFile() {
//   const filePath = "writtenTestFile.txt";

//   try {

//     await fs.access(filePath);

//     await fs.unlink(filePath);

//     console.log("File deleted successfully");

//   } catch {
//     if (err.code === "ENOENT") {
//       console.log("File does not exist");
//     } else {
//       console.error("Error deleting file:", err);
//     }
//   }
// }

// //deleteFile();

// /*
// async function deleteFiles() {
//     const files = [
//         'temp1.txt',
//         'temp2.txt',
//         'temp3.txt'
//     ]

//     try {
//         await Promise.all(() => {
//             files.map(file => {
//                 try {
//                     fs.unlink(file)
//                 } catch (err) {
//                     if(err.code === 'ENOENT'){
//                         console.log("File don't exist")
//                     }
//                 }
//             })
//         })

//         console.log('Files deleted successfully');
//     }
// }
// */
// //deleteFiles()

// // appendingToFile();
// // readFile();
// // writeFile();

import fs from 'fs/promises'

try {
  const data = await fs.readFile('todos.json','utf8')
  const parsedData = JSON.parse(data);
  
  parsedData.done = true;

  await fs.writeFile('todos.json',null, 1);
  console.log('JSON is now updated')

  console.log(data)
} catch (err) {
  console.error(err)
}