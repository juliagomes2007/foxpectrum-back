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
const btnCrisis_repository_1 = require("../repositories/btnCrisis-repository");
class BtnCrisisController {
    constructor() { }
    save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const btnCrisisRepo = new btnCrisis_repository_1.BtnCrisisRepository();
            try {
                const success = yield btnCrisisRepo.save(req.body);
                return res.json({ success });
            }
            catch (error) {
                console.log({ error: error });
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const btnCrisisRepo = new btnCrisis_repository_1.BtnCrisisRepository();
                const btnCrisisList = yield btnCrisisRepo.getAll();
                return res.json(btnCrisisList);
            }
            catch (error) {
                return res.json({ error: error });
            }
        });
    }
    updateBtnCrisis(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const btnCrisisRepo = new btnCrisis_repository_1.BtnCrisisRepository();
                const btnCrisis = yield btnCrisisRepo.update(req.params.id, req.body);
                return res.json(btnCrisis);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const btnCrisisRepo = new btnCrisis_repository_1.BtnCrisisRepository();
                const btnCrisis = yield btnCrisisRepo.deleteById(req.params.id);
                return res.json(btnCrisis);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
}
exports.default = BtnCrisisController;
//# sourceMappingURL=btn-crisis.controller.js.map