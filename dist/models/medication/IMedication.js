"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicationSchema = void 0;
const mongoose_1 = require("mongoose");
exports.medicationSchema = new mongoose_1.Schema({
    name: { type: String, required: false },
    hour: { type: Date, required: false },
    stock: { type: Number, required: false },
    dosage: { type: Number, default: false, required: false },
    duration: { type: Number, default: false, required: false },
    takes: { type: mongoose_1.Types.ObjectId, ref: 'User', required: false },
});
//# sourceMappingURL=IMedication.js.map