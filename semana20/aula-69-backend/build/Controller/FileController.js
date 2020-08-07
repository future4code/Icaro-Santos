"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const S3Service_1 = require("../Services/S3Service");
class FileController {
    fileUpload(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const file = req.files && req.files.file;
                if (!file) {
                    throw new Error("You must send a file");
                }
                const s3Service = new S3Service_1.S3Service();
                const result = yield s3Service.uploadFile({
                    name: file.name,
                    file: file.data
                });
                res.status(200).send(result);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
}
exports.FileController = FileController;
//# sourceMappingURL=FileController.js.map