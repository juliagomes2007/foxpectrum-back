"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.todoSchema = new mongoose_1.Schema({
    task: { type: String, required: true },
    date: { type: Date, required: false },
    everyDay: { type: Boolean, default: false, required: true },
    createdBy: { type: mongoose_1.Types.ObjectId, ref: 'User', required: false },
    assignedTo: { type: (Array), ref: 'User', required: true },
    check: { type: Boolean, default: false, required: false },
});
//# sourceMappingURL=ITodo.js.map