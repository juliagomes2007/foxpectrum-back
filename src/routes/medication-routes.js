"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationRoutes = void 0;
var express_1 = require("express");
var medication_controller_1 = require("../controllers/medication.controller");
var MedicationRoutes = /** @class */ (function () {
    function MedicationRoutes() {
        this.router = (0, express_1.Router)();
        this.medicationController = new medication_controller_1.default();
        this.intializeRoutes();
    }
    MedicationRoutes.prototype.intializeRoutes = function () {
        this.router.route('/').post(this.medicationController.save);
        this.router.route('/').get(this.medicationController.getAll);
        this.router.route('/:id').put(this.medicationController.updateMedication);
        this.router.route("/:id").delete(this.medicationController.deleteById);
    };
    return MedicationRoutes;
}());
exports.MedicationRoutes = MedicationRoutes;
exports.default = new MedicationRoutes().router;
