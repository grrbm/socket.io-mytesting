const { io } = require("socket.io-client");
const socket = io.connect("http://localhost:5000");
socket.on("connect_error", function (error) {
  console.log("Connection Failed: " + error);
});
socket.on("message", function (m) {
  console.log("recv server message", m);
});

function App() {
  return <div>This is the app</div>;
}

export default App;
