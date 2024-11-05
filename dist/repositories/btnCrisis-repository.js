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
exports.BtnCrisisRepository = void 0;
const mongoose_1 = require("mongoose");
const IBtnCrisis_1 = require("../models/btnCrisis/IBtnCrisis");
class BtnCrisisRepository {
    constructor() {
        var _a;
        this.dbname = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'foxpectrum';
    }
    save(btnCrisis) {
        return __awaiter(this, void 0, void 0, function* () {
            const BtnCrisis = (0, mongoose_1.model)('BtnCrisis', IBtnCrisis_1.btnCrisisSchema);
            const btnCrisisData = new BtnCrisis(Object.assign({}, btnCrisis));
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return !!(yield btnCrisisData.save()).id;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const BtnCrisis = (0, mongoose_1.model)('BtnCrisis', IBtnCrisis_1.btnCrisisSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield BtnCrisis.find({});
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
    update(_id, btnCrisis) {
        return __awaiter(this, void 0, void 0, function* () {
            const BtnCrisis = (0, mongoose_1.model)('BtnCrisis', IBtnCrisis_1.btnCrisisSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield BtnCrisis.updateOne({ _id }, Object.assign({}, btnCrisis));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return BtnCrisis;
        });
    }
    deleteById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const BtnCrisis = (0, mongoose_1.model)('BtnCrisis', IBtnCrisis_1.btnCrisisSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield BtnCrisis.deleteOne({ _id });
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
exports.BtnCrisisRepository = BtnCrisisRepository;
//# sourceMappingURL=btnCrisis-repository.js.map