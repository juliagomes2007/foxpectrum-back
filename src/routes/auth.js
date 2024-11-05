"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("../controllers/auth.controller");
var AuthRoutes = /** @class */ (function () {
    function AuthRoutes() {
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.default();
        this.intializeRoutes();
    }
    AuthRoutes.prototype.intializeRoutes = function () {
        this.router.route('/save').post(this.authController.save);
        this.router.route('/').get(this.authController.getAll);
        this.router.route('/:id').put(this.authController.updateRegister);
        this.router.route("/:id").delete(this.authController.deleteById);
    };
    return AuthRoutes;
}());
exports.default = new AuthRoutes().router;
