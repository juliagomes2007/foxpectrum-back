"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
const express_1 = require("express");
const event_controller_1 = __importDefault(require("../controllers/event.controller"));
class EventRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.eventController = new event_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').post(this.eventController.save);
        this.router.route('/:date').get(this.eventController.getByDate);
        this.router.route('/:id').put(this.eventController.updateEvent);
        this.router.route("/:id").delete(this.eventController.deleteById);
    }
}
exports.EventRoutes = EventRoutes;
exports.default = new EventRoutes().router;
//# sourceMappingURL=event-routes.js.map