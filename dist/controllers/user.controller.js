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
const user_repository_1 = require("../repositories/user-repository");
class UserController {
    constructor() { }
    save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepo = new user_repository_1.UserRepository();
            try {
                const id = yield userRepo.save(req.body);
                return res.json({ id });
            }
            catch (error) {
            }
            console.log('teste');
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userRepo = new user_repository_1.UserRepository();
                const userList = yield userRepo.getAll();
                return res.json(userList);
            }
            catch (error) {
                return res.json({ error: error });
            }
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userRepo = new user_repository_1.UserRepository();
                const user = yield userRepo.update(req.params.id, req.body);
                return res.json(user);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userRepo = new user_repository_1.UserRepository();
                const user = yield userRepo.deleteById(req.params.id);
                return res.json(user);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map