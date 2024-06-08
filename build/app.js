"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cors = require('cors');
var app = (0, express_1.default)();
app.use(express_1.default.static(__dirname + '/public'));
app.use(cors());
// Define a route to serve your HTML file
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
// Start the server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
