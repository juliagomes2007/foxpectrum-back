"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moodTracker_repository_1 = require("../repositories/moodTracker-repository");
class MoodTrackerController {
    constructor() { }
    save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const moodTrackerRepo = new moodTracker_repository_1.MoodTrackerRepository();
            console.log(req.body);
            try {
                const id = yield moodTrackerRepo.save(req.body);
                return res.json({ success: id });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const moodTrackerRepo = new moodTracker_repository_1.MoodTrackerRepository();
                const moodTrackerList = yield moodTrackerRepo.getAll();
                return res.json(moodTrackerList);
            }
            catch (error) {
                return res.json({ error: error });
            }
        });
    }
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const moodTrackerRepo = new moodTracker_repository_1.MoodTrackerRepository();
                const moodTrackerList = yield moodTrackerRepo.getById(req.params.status); // pega status da url
                return res.json(moodTrackerList);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    updateMoodTracker(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const moodTrackerRepo = new moodTracker_repository_1.MoodTrackerRepository();
                const moodTracker = yield moodTrackerRepo.update(req.params.id, req.body);
                return res.json(moodTracker);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const moodTrackerRepo = new moodTracker_repository_1.MoodTrackerRepository();
                const moodTracker = yield moodTrackerRepo.deleteById(req.params.id);
                return res.json(moodTracker);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
}
exports.default = MoodTrackerController;
//# sourceMappingURL=mood-tracker.controller.js.map