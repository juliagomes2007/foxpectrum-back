"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.todoSchema = new mongoose_1.Schema({
    task: { type: (Array), required: true },
    from: { type: mongoose_1.Types.ObjectId, ref: 'User', required: false },
});
//# sourceMappingURL=IWishlist.js.map