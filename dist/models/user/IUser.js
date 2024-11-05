"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    birthdate: { type: Date, required: true },
    famRole: { type: String, required: true },
    wishlist: { type: (Array), required: false }
});
//# sourceMappingURL=IUser.js.map