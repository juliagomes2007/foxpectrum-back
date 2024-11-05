"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("../controllers/user.controller");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = (0, express_1.Router)();
        this.userController = new user_controller_1.default();
        this.intializeRoutes();
    }
    UserRoutes.prototype.intializeRoutes = function () {
        this.router.route('/save').post(this.userController.save);
        this.router.route('/').get(this.userController.getAll);
        this.router.route('/:id').put(this.userController.updateUser);
        this.router.route("/:id").delete(this.userController.deleteById);
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
