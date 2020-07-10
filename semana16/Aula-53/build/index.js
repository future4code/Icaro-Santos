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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
dotenv_1.default.config();
var connection = knex_1.default({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});
var app = express_1.default();
app.use(express_1.default.json());
var server = app.listen(process.env.PORT || 3003, function () {
    if (server) {
        var address = server.address();
        console.log("Server is running in http://localhost:" + address.port);
    }
    else {
        console.error("Failure upon starting server.");
    }
});
var getActorById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection.raw("\n    SELECT * FROM Actor WHERE id = '" + id + "'\n  ")];
            case 1:
                result = _a.sent();
                return [2, result[0][0]];
        }
    });
}); };
var searchActor = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection.raw("\n    SELECT * FROM Actor WHERE name = \"" + name + "\"\n  ")];
            case 1:
                result = _a.sent();
                return [2, result];
        }
    });
}); };
var searchMovie = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection.raw("\n        select * from Movie where name like \"%" + name + "%\" OR sinopse like \"%" + name + "%\" order by release_date\n    ")];
            case 1:
                result = _a.sent();
                return [2, result[0]];
        }
    });
}); };
var countActors = function (gender) { return __awaiter(void 0, void 0, void 0, function () {
    var result, count;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection.raw("\n    SELECT COUNT(*) as count FROM Actor WHERE gender = \"" + gender + "\"\n  ")];
            case 1:
                result = _a.sent();
                count = result[0][0].count;
                return [2, count];
        }
    });
}); };
var createActor = function (id, name, salary, dateOfBirth, gender) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection.insert({
                    id: id,
                    name: name,
                    salary: salary,
                    dateOfBirth: dateOfBirth,
                    gender: gender
                })
                    .into("Actor")];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };
var createMovie = function (id, title, sinopse, releaseDate, playingLimitDate) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection.insert({
                    id: id,
                    title: title,
                    sinopse: sinopse,
                    release_date: releaseDate,
                    playing_limit_date: playingLimitDate
                })
                    .into("Movie")];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };
var getAllMovies = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection.raw("\n        select * from Movie limit 15\n    ")];
            case 1:
                result = _a.sent();
                return [2, result[0]];
        }
    });
}); };
var updateActorSalary = function (id, salary) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection("Actor")
                    .update({
                    salary: salary,
                })
                    .where("id", id)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };
var deleteActor = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection("Actor")
                    .delete(id)
                    .where("id", id)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };
var avgSalaryByGender = function (gender) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, connection("Actor")
                    .avg("salary as average")
                    .where({ gender: gender })];
            case 1:
                result = _a.sent();
                return [2, result[0].average];
        }
    });
}); };
app.get("/actor/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, actor, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4, getActorById(id)];
            case 1:
                actor = _a.sent();
                res.status(200).send(actor);
                return [3, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400).send({
                    message: err_1.message
                });
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
app.get("/actor", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var count, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, countActors(req.query.gender)];
            case 1:
                count = _a.sent();
                res.status(200).send({
                    quantity: count
                });
                return [3, 3];
            case 2:
                err_2 = _a.sent();
                res.status(400).send({
                    message: err_2.message
                });
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
app.put("/actor", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, createActor(req.body.id, req.body.name, req.body.salary, new Date(req.body.dateOfBirth), req.body.gender)];
            case 1:
                _a.sent();
                res.status(200).send();
                return [3, 3];
            case 2:
                err_3 = _a.sent();
                res.status(400).send({
                    message: err_3.message
                });
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
app.post("/actor", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, updateActorSalary(req.body.id, req.body.salary)];
            case 1:
                _a.sent();
                res.status(200).send({
                    message: "Sucesso"
                });
                return [3, 3];
            case 2:
                err_4 = _a.sent();
                res.status(400).send({
                    message: err_4.message
                });
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
app.delete("/actor/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, deleteActor(req.params.id)];
            case 1:
                _a.sent();
                return [3, 3];
            case 2:
                err_5 = _a.sent();
                res.status(400).send({
                    message: err_5.message
                });
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
app.post("/movie", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, createMovie(req.body.id, req.body.title, req.body.sinopse, new Date(req.body.releaseDate), new Date(req.body.playingLimitDate))];
            case 1:
                _a.sent();
                res.status(400).send({
                    message: "Sucesso"
                });
                return [3, 3];
            case 2:
                err_6 = _a.sent();
                res.status(400).send({
                    message: err_6.message
                });
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
app.get("/movie/all", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, err_7;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res.status(200)).send;
                return [4, getAllMovies()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3, 3];
            case 2:
                err_7 = _c.sent();
                res.status(400).send({
                    message: err_7.message
                });
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
app.get("/movie/search", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movies, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, searchMovie(req.query.name)];
            case 1:
                movies = _a.sent();
                res.status(200).send({
                    message: movies
                });
                return [3, 3];
            case 2:
                err_8 = _a.sent();
                res.status(400).send({
                    message: err_8.message
                });
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
