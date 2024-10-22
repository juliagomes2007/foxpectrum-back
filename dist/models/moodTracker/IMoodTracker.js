"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moodTrackerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.moodTrackerSchema = new mongoose_1.Schema({
    day: { type: String, required: false },
    feeling: { type: (Array), required: false },
    write: { type: String, required: false },
    overcharged: { type: Boolean, default: false, required: false },
    verbal: { type: Boolean, default: false, required: false },
    physicalContact: { type: Boolean, default: false, required: false },
    date: { type: Date, required: false },
    user: { type: mongoose_1.Types.ObjectId, ref: 'User', required: false },
});
//# sourceMappingURL=IMoodTracker.js.map