// READING AND WRITING FILES IN NODE JS

// 1. import the filesystem module in node
const fs = require("fs");
// // console.log(fileContent);
// const fileContent = fs.readFileSync("./MyFiles/Output.txt", "utf-8");
// // Write files synchronously
// const content = `Data was read from input.txt: ${fileContent} time:${new Date()}`;
// fs.writeFileSync("./MyFiles/Output.txt", content);
// // Read files synchronously
// console.log(fileContent);

// const rl = require("readline");

// const readline = rl.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const fileContent = {
//   data: "",
// };

// readline.question("what do you want to write to a file: ", (ans) => {
//   const data = ans;
//   fs.writeFileSync("./MyFiles/Output.txt", data);
//   fileContent.data = fs.readFileSync("./MyFiles/Output.txt", "utf-8");
//   readline.close();
// });

// // readline.on("close", () => {
// //   console.log("File Content: " + fileContent.data);
// // });

// fs.writeFileSync("./MyFiles/new.txt", "just created this file");

// READING FILES ASYNCHRONOUSLY
// fs.readFile("./MyFiles/new.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw new Error("Something went wrong reading the file");
//   }
//   console.log(data);
// });
// console.log("Reading the file...");

// fs.readFile("./MyFils/new.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw Error("Could not read the file, please check the path");
//   }
//   console.log("The data is: " + data);
// });

fs.writeFile("./MyFiles/abiola.txt", "Hey Abiola I am loving you", (err) => {
  console.log("File written successfully");
  fs.readFile("./MyFiles/abiola.txt", "utf-8", (err, data) => {
    console.log(data);
  });
});
