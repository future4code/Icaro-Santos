"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
const express_1 = require("express");
const FileController_1 = require("../Controller/FileController");
exports.fileRouter = express_1.Router();
exports.fileRouter.put('/upload', new FileController_1.FileController().fileUpload);
//# sourceMappingURL=FileRouter.js.map