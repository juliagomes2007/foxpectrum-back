"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtnCrisisRoutes = void 0;
const express_1 = require("express");
const btn_crisis_controller_1 = __importDefault(require("../controllers/btn-crisis.controller"));
class BtnCrisisRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.btnCrisisController = new btn_crisis_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').post(this.btnCrisisController.save);
        this.router.route('/').get(this.btnCrisisController.getAll);
        this.router.route('/:id').put(this.btnCrisisController.updateBtnCrisis);
        this.router.route("/:id").delete(this.btnCrisisController.deleteById);
    }
}
exports.BtnCrisisRoutes = BtnCrisisRoutes;
exports.default = new BtnCrisisRoutes().router;
//# sourceMappingURL=btnCrisis-routes.js.map