"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodTrackerRoutes = void 0;
const express_1 = require("express");
const mood_tracker_controller_1 = __importDefault(require("../controllers/mood-tracker.controller"));
class MoodTrackerRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.moodTrackerController = new mood_tracker_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').post(this.moodTrackerController.save);
        this.router.route('/').get(this.moodTrackerController.getAll);
        this.router.route('/:id').get(this.moodTrackerController.getById);
        this.router.route('/:id').put(this.moodTrackerController.updateMoodTracker);
        this.router.route("/:id").delete(this.moodTrackerController.deleteById);
    }
}
exports.MoodTrackerRoutes = MoodTrackerRoutes;
exports.default = new MoodTrackerRoutes().router;
//# sourceMappingURL=moodTracker-routes.js.map