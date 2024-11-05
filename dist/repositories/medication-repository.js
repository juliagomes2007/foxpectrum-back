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
exports.MedicationRepository = void 0;
const mongoose_1 = require("mongoose");
const IMedication_1 = require("../models/medication/IMedication");
class MedicationRepository {
    constructor() {
        var _a;
        this.dbname = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'foxpectrum';
    }
    save(medication) {
        return __awaiter(this, void 0, void 0, function* () {
            const Medication = (0, mongoose_1.model)('Medication', IMedication_1.medicationSchema);
            const medicationData = new Medication(Object.assign({}, medication));
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return !!(yield medicationData.save()).id;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const Medication = (0, mongoose_1.model)('Medication', IMedication_1.medicationSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Medication.find({});
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
    update(_id, medication) {
        return __awaiter(this, void 0, void 0, function* () {
            const Medication = (0, mongoose_1.model)('Medication', IMedication_1.medicationSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Medication.updateOne({ _id }, Object.assign({}, medication));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return Medication;
        });
    }
    deleteById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Medication = (0, mongoose_1.model)('Medication', IMedication_1.medicationSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Medication.deleteOne({ _id });
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
exports.MedicationRepository = MedicationRepository;
//# sourceMappingURL=medication-repository.js.map