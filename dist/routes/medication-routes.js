"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationRoutes = void 0;
const express_1 = require("express");
const medication_controller_1 = __importDefault(require("../controllers/medication.controller"));
class MedicationRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.medicationController = new medication_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').post(this.medicationController.save);
        this.router.route('/').get(this.medicationController.getAll);
        this.router.route('/:id').put(this.medicationController.updateMedication);
        this.router.route("/:id").delete(this.medicationController.deleteById);
    }
}
exports.MedicationRoutes = MedicationRoutes;
exports.default = new MedicationRoutes().router;
//# sourceMappingURL=medication-routes.js.map