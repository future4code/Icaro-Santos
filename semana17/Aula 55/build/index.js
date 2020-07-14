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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const IdGenerator_1 = require("./service/IdGenerator");
const Authenticator_1 = require("./service/Authenticator");
const UserDatabase_1 = require("./data/UserDatabase");
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is runing in http://localhost:${address.port}`);
    }
    else {
        console.error(`Server failure`);
    }
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generateId = new IdGenerator_1.IdGenerator();
        const id = generateId.generate();
        const userDb = new UserDatabase_1.UserDatabase();
        const userData = {
            email: req.body.email,
            password: req.body.password
        };
        yield userDb.createUser(id, userData.email, userData.password);
        const authenticator = new Authenticator_1.Authenticator();
        const token = authenticator.generateToken({
            id,
        });
        res.status(200).send({
            token
        });
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}));
//# sourceMappingURL=index.js.map