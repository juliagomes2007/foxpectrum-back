"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const todo_routes_1 = require("./todo-routes");
const moodTracker_routes_1 = require("./moodTracker-routes");
class Routes {
    constructor(app) {
        app.use('/api/auth', auth_1.default);
        app.use('/api/todo', todo_routes_1.default);
        app.use('/api/mood-tracker', moodTracker_routes_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map