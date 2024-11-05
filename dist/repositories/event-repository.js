"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRepository = void 0;
const mongoose_1 = require("mongoose");
const IEvent_1 = require("../models/event/IEvent");
class EventRepository {
    constructor() {
        var _a;
        this.dbname = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'foxpectrum';
    }
    save(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const Event = (0, mongoose_1.model)('Event', IEvent_1.eventSchema);
            const eventData = new Event(Object.assign({}, event));
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return !!(yield eventData.save()).id;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getByDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const Event = (0, mongoose_1.model)('Event', IEvent_1.eventSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Event.find({ date: date });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return [];
        });
    }
    update(_id, event) {
        return __awaiter(this, void 0, void 0, function* () {
            const Event = (0, mongoose_1.model)('Event', IEvent_1.eventSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Event.updateOne({ _id }, Object.assign({}, event));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return Event;
        });
    }
    deleteById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Event = (0, mongoose_1.model)('Event', IEvent_1.eventSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Event.deleteOne({ _id });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
        });
    }
}
exports.EventRepository = EventRepository;
//# sourceMappingURL=event-repository.js.map