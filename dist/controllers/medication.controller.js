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
const medication_repository_1 = require("../repositories/medication-repository");
class MedicationController {
    constructor() { }
    save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const medicationRepo = new medication_repository_1.MedicationRepository();
            try {
                const success = yield medicationRepo.save(req.body);
                return res.json({ success });
            }
            catch (error) {
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const medicationRepo = new medication_repository_1.MedicationRepository();
                const medicationList = yield medicationRepo.getAll();
                return res.json(medicationList);
            }
            catch (error) {
                return res.json({ error: error });
            }
        });
    }
    updateMedication(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const medicationRepo = new medication_repository_1.MedicationRepository();
                const medication = yield medicationRepo.update(req.params.id, req.body);
                return res.json(medication);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const medicationRepo = new medication_repository_1.MedicationRepository();
                const medication = yield medicationRepo.deleteById(req.params.id);
                return res.json(medication);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
}
exports.default = MedicationController;
//# sourceMappingURL=medication.controller.js.map