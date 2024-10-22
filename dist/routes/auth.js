"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/save').post(this.authController.save);
    }
}
exports.default = new AuthRoutes().router;
//# sourceMappingURL=auth.js.map