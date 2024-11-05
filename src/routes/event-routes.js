"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
var express_1 = require("express");
var event_controller_1 = require("../controllers/event.controller");
var EventRoutes = /** @class */ (function () {
    function EventRoutes() {
        this.router = (0, express_1.Router)();
        this.eventController = new event_controller_1.default();
        this.intializeRoutes();
    }
    EventRoutes.prototype.intializeRoutes = function () {
        this.router.route('/').post(this.eventController.save);
        this.router.route('/:date').get(this.eventController.getByDate);
        this.router.route('/:id').put(this.eventController.updateEvent);
        this.router.route("/:id").delete(this.eventController.deleteById);
    };
    return EventRoutes;
}());
exports.EventRoutes = EventRoutes;
exports.default = new EventRoutes().router;
