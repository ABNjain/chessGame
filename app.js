const express = require("express");
const socket = require("socket.io");
const http = require("http");
const {Chess} = require("chess.js");
const path = require("path");
const dbgr = require("debug")("development:chessGame");
const config = require("./config/development.json")

const app = express();
const server = http.createServer(app);

const io = socket(server);

const chess = new Chess();

let players = {};
let currentPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {title: "CHESS Game"});
});

server.listen(process.env.GAMEPORT, () => {
    dbgr(`Server is running on port ${config.get("GAME_URI")}${GAMEPORT}`);
})