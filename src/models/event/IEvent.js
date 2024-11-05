"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventSchema = void 0;
var mongoose_1 = require("mongoose");
exports.eventSchema = new mongoose_1.Schema({
    event: { type: String, required: true },
    date: { type: Date, required: false },
    everyDay: { type: Boolean, default: false, required: true },
    assignedTo: { type: (Array), ref: 'User', required: true },
    desc: { type: String, default: false, required: false },
});
