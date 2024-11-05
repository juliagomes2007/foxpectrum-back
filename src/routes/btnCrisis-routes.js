"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtnCrisisRoutes = void 0;
var express_1 = require("express");
var btn_crisis_controller_1 = require("../controllers/btn-crisis.controller");
var BtnCrisisRoutes = /** @class */ (function () {
    function BtnCrisisRoutes() {
        this.router = (0, express_1.Router)();
        this.btnCrisisController = new btn_crisis_controller_1.default();
        this.intializeRoutes();
    }
    BtnCrisisRoutes.prototype.intializeRoutes = function () {
        this.router.route('/').post(this.btnCrisisController.save);
        this.router.route('/').get(this.btnCrisisController.getAll);
        this.router.route('/:id').put(this.btnCrisisController.updateBtnCrisis);
        this.router.route("/:id").delete(this.btnCrisisController.deleteById);
    };
    return BtnCrisisRoutes;
}());
exports.BtnCrisisRoutes = BtnCrisisRoutes;
exports.default = new BtnCrisisRoutes().router;
