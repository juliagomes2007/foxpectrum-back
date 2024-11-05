"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userController = new user_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/save').post(this.userController.save);
        this.router.route('/').get(this.userController.getAll);
        this.router.route('/:id').put(this.userController.updateUser);
        this.router.route("/:id").delete(this.userController.deleteById);
    }
}
exports.default = new UserRoutes().router;
//# sourceMappingURL=user-routes.js.map