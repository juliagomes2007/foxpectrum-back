"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    neurodivergence: { type: String, required: true },
    verbal: { type: Boolean, default: true, required: true }
});
//# sourceMappingURL=IUserDivergent.js.map