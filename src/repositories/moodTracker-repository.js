"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodTrackerRepository = void 0;
var mongoose_1 = require("mongoose");
var IMoodTracker_1 = require("../models/moodTracker/IMoodTracker");
var MoodTrackerRepository = /** @class */ (function () {
    function MoodTrackerRepository() {
        var _a;
        this.dbname = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'foxpectrum';
    }
    MoodTrackerRepository.prototype.save = function (moodTracker) {
        return __awaiter(this, void 0, void 0, function () {
            var MoodTracker, moodTrackerData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MoodTracker = (0, mongoose_1.model)('MoodTracker', IMoodTracker_1.moodTrackerSchema);
                        console.log(moodTracker);
                        moodTrackerData = new MoodTracker(__assign({}, moodTracker));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, mongoose_1.connect)("mongodb://localhost:27017/".concat(this.dbname))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, moodTrackerData.save()];
                    case 3: return [2 /*return*/, !!(_a.sent()).id];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MoodTrackerRepository.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var MoodTracker, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MoodTracker = (0, mongoose_1.model)('MoodTracker', IMoodTracker_1.moodTrackerSchema);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, (0, mongoose_1.connect)("mongodb://localhost:27017/".concat(this.dbname))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, MoodTracker.find({})];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 6];
                    case 5:
                        (0, mongoose_1.disconnect)();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/, []];
                }
            });
        });
    };
    MoodTrackerRepository.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var MoodTracker, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MoodTracker = (0, mongoose_1.model)('Todo', IMoodTracker_1.moodTrackerSchema);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, (0, mongoose_1.connect)("mongodb://localhost:27017/".concat(this.dbname))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, MoodTracker.find({ check: id })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 6];
                    case 5:
                        (0, mongoose_1.disconnect)();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/, []];
                }
            });
        });
    };
    MoodTrackerRepository.prototype.update = function (_id, moodTracker) {
        return __awaiter(this, void 0, void 0, function () {
            var MoodTracker, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MoodTracker = (0, mongoose_1.model)('MoodTracker', IMoodTracker_1.moodTrackerSchema);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, (0, mongoose_1.connect)("mongodb://localhost:27017/".concat(this.dbname))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, MoodTracker.updateOne({ _id: _id }, __assign({}, moodTracker))];
                    case 3: return [2 /*return*/, _a.sent()]; //== {task: todo.task, check: todo.check}
                    case 4:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 6];
                    case 5:
                        (0, mongoose_1.disconnect)();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/, MoodTracker];
                }
            });
        });
    };
    MoodTrackerRepository.prototype.deleteById = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var MoodTracker, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MoodTracker = (0, mongoose_1.model)('MoodTracker', IMoodTracker_1.moodTrackerSchema);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, (0, mongoose_1.connect)("mongodb://localhost:27017/".concat(this.dbname))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, MoodTracker.deleteOne({ _id: _id })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 6];
                    case 5:
                        (0, mongoose_1.disconnect)();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return MoodTrackerRepository;
}());
exports.MoodTrackerRepository = MoodTrackerRepository;
