"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const user_routes_1 = __importDefault(require("./user-routes"));
const todo_routes_1 = __importDefault(require("./todo-routes"));
const moodTracker_routes_1 = __importDefault(require("./moodTracker-routes"));
const medication_routes_1 = __importDefault(require("./medication-routes"));
const btnCrisis_routes_1 = __importDefault(require("./btnCrisis-routes"));
class Routes {
    static define(app) {
        app.use('/api/auth', auth_1.default);
        app.use('/api/user', user_routes_1.default);
        app.use('/api/todo', todo_routes_1.default);
        app.use('/api/mood-tracker', moodTracker_routes_1.default);
        app.use('/api/medication', medication_routes_1.default);
        app.use('/api/btn-crisis', btnCrisis_routes_1.default);
        return app;
    }
}
exports.default = Routes.define((0, express_1.Router)());
//# sourceMappingURL=index.js.map