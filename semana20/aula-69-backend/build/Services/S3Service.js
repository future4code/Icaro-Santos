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
exports.S3Service = void 0;
const aws_sdk_1 = require("aws-sdk");
class S3Service {
    constructor() {
        this.s3 = new aws_sdk_1.S3({
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY
        });
    }
    uploadFile(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.s3.upload({
                Bucket: 'aula-69',
                Key: input.name,
                Body: input.file
            }).promise();
            return {
                link: result.Location
            };
        });
    }
}
exports.S3Service = S3Service;
//# sourceMappingURL=S3Service.js.map