const fs = require("fs");

const content = {};
fs.readFile("./Template/index.html", "utf-8", (err, data) => {
  content.data = data;
});

// A simple web server with nodejs
const http = require("http");
// step1: create a server
const server = http.createServer((req, res) => {
  console.log("A new request recieved");
  res.end(content.data);
  //   console.log(req);
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server started...");
});
