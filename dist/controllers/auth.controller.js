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
const register_repository_1 = require("../repositories/register-repository");
class AuthController {
    constructor() { }
    save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const registerRepo = new register_repository_1.RegisterRepository();
            try {
                const id = yield registerRepo.save(req.body);
                return res.json({ id });
            }
            catch (error) {
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registerRepo = new register_repository_1.RegisterRepository();
                const registerList = yield registerRepo.getAll();
                return res.json(registerList);
            }
            catch (error) {
                return res.json({ error: error });
            }
        });
    }
    updateRegister(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registerRepo = new register_repository_1.RegisterRepository();
                const register = yield registerRepo.update(req.params.id, req.body);
                return res.json(register);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registerRepo = new register_repository_1.RegisterRepository();
                const register = yield registerRepo.deleteById(req.params.id);
                return res.json(register);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map