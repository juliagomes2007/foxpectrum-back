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
const event_repository_1 = require("../repositories/event-repository");
class EventController {
    constructor() { }
    save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventRepo = new event_repository_1.EventRepository();
            try {
                const success = yield eventRepo.save(req.body);
                return res.json({ success });
            }
            catch (error) {
                console.log({ error: error });
            }
        });
    }
    getByDate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eventRepo = new event_repository_1.EventRepository();
                const eventList = yield eventRepo.getByDate(req.params.date);
                return res.json(eventList);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    updateEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eventRepo = new event_repository_1.EventRepository();
                const event = yield eventRepo.update(req.params.id, req.body);
                return res.json(event);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eventRepo = new event_repository_1.EventRepository();
                const event = yield eventRepo.deleteById(req.params.id);
                return res.json(event);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
}
exports.default = EventController;
//# sourceMappingURL=event.controller.js.map