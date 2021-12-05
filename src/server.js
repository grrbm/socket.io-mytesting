const path = require("path");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

//Server everything in public folder
app.use(express.static(path.join(__dirname, "../public")));

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  // ...
  console.log("you have connected");
});

httpServer.listen(5000, () => {
  console.log("Server listening on port 5000.");
});
