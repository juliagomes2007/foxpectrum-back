"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/save').post(this.authController.save);
        this.router.route('/').get(this.authController.getAll);
        this.router.route('/:id').put(this.authController.updateRegister);
        this.router.route("/:id").delete(this.authController.deleteById);
    }
}
exports.default = new AuthRoutes().router;
//# sourceMappingURL=auth.js.map