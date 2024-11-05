"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./auth");
var user_routes_1 = require("./user-routes");
var todo_routes_1 = require("./todo-routes");
var moodTracker_routes_1 = require("./moodTracker-routes");
var medication_routes_1 = require("./medication-routes");
var btnCrisis_routes_1 = require("./btnCrisis-routes");
var Routes = /** @class */ (function () {
    function Routes(app) {
        app.use('/api/auth', auth_1.default);
        app.use('/api/user', user_routes_1.default);
        app.use('/api/todo', todo_routes_1.default);
        app.use('/api/mood-tracker', moodTracker_routes_1.default);
        app.use('/api/medication', medication_routes_1.default);
        app.use('/api/btn-crisis', btnCrisis_routes_1.default);
    }
    return Routes;
}());
exports.default = Routes;
