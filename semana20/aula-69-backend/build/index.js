"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const FileRouter_1 = require("./Router/FileRouter");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.app = express_1.default();
exports.app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methos", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
exports.app.use(cors_1.default({ origin: true }));
exports.app.use(express_1.default.json());
exports.app.use(express_fileupload_1.default());
exports.app.use("/files", FileRouter_1.fileRouter);
//# sourceMappingURL=index.js.map