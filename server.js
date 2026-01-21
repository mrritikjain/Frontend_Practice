import http from "http"

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.end("Hello from server");
});
server.listen(PORT, () => {console.log("server started")});
