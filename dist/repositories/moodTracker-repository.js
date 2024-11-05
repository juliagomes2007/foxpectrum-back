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
exports.MoodTrackerRepository = void 0;
const mongoose_1 = require("mongoose");
const IMoodTracker_1 = require("../models/moodTracker/IMoodTracker");
class MoodTrackerRepository {
    constructor() {
        var _a;
        this.dbname = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'foxpectrum';
    }
    save(moodTracker) {
        return __awaiter(this, void 0, void 0, function* () {
            const MoodTracker = (0, mongoose_1.model)('MoodTracker', IMoodTracker_1.moodTrackerSchema);
            console.log(moodTracker);
            const moodTrackerData = new MoodTracker(Object.assign({}, moodTracker));
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return !!(yield moodTrackerData.save()).id;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const MoodTracker = (0, mongoose_1.model)('MoodTracker', IMoodTracker_1.moodTrackerSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield MoodTracker.find({});
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return [];
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const MoodTracker = (0, mongoose_1.model)('Todo', IMoodTracker_1.moodTrackerSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield MoodTracker.find({ check: id });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return [];
        });
    }
    update(_id, moodTracker) {
        return __awaiter(this, void 0, void 0, function* () {
            const MoodTracker = (0, mongoose_1.model)('MoodTracker', IMoodTracker_1.moodTrackerSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield MoodTracker.updateOne({ _id }, Object.assign({}, moodTracker));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return MoodTracker;
        });
    }
    deleteById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const MoodTracker = (0, mongoose_1.model)('MoodTracker', IMoodTracker_1.moodTrackerSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield MoodTracker.deleteOne({ _id });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
        });
    }
}
exports.MoodTrackerRepository = MoodTrackerRepository;
//# sourceMappingURL=moodTracker-repository.js.map