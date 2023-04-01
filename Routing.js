// Create a server

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request recieved");
  let urlPath = req.url;
  //   check url to define adequate routes
  if (urlPath === "/") {
    res.end(urlPath);
  } else if (urlPath === "/about") {
    res.end(urlPath + ` This an about page`);
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log("request recieved");
});
