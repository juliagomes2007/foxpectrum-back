"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.btnCrisisSchema = void 0;
const mongoose_1 = require("mongoose");
exports.btnCrisisSchema = new mongoose_1.Schema({
    phone: { type: (Array), required: false },
    help: { type: (Array), required: false },
    user: { type: mongoose_1.Types.ObjectId, ref: 'User', required: false }
});
//# sourceMappingURL=IBtnCrisis.js.map