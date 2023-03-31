// A simple web server with nodejs
const http = require("http");
// step1: create a server
const server = http.createServer((req, res) => {
  console.log("A new request recieved");
  res.end(`From server: Request recieved`);
  console.log(req);
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server started...");
});

// for (let codes in http.STATUS_CODES) {
//   console.log(`${codes} => ${http.STATUS_CODES[codes]}`);
// }
// // console.log(http.STATUS_CODES);
