"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodTrackerRoutes = void 0;
var express_1 = require("express");
var mood_tracker_controller_1 = require("../controllers/mood-tracker.controller");
var MoodTrackerRoutes = /** @class */ (function () {
    function MoodTrackerRoutes() {
        this.router = (0, express_1.Router)();
        this.moodTrackerController = new mood_tracker_controller_1.default();
        this.intializeRoutes();
    }
    MoodTrackerRoutes.prototype.intializeRoutes = function () {
        this.router.route('/').post(this.moodTrackerController.save);
        this.router.route('/').get(this.moodTrackerController.getAll);
        this.router.route('/:id').get(this.moodTrackerController.getById);
        this.router.route('/:id').put(this.moodTrackerController.updateMoodTracker);
        this.router.route("/:id").delete(this.moodTrackerController.deleteById);
    };
    return MoodTrackerRoutes;
}());
exports.MoodTrackerRoutes = MoodTrackerRoutes;
exports.default = new MoodTrackerRoutes().router;
