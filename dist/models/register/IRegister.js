"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.registerSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});
//# sourceMappingURL=IRegister.js.map