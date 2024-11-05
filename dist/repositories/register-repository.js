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
exports.RegisterRepository = void 0;
const mongoose_1 = require("mongoose");
const IRegister_1 = require("../models/register/IRegister");
class RegisterRepository {
    constructor() {
        var _a;
        this.dbname = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'foxpectrum';
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const Register = (0, mongoose_1.model)('Register', IRegister_1.registerSchema);
            const registerData = new Register(Object.assign({}, Register));
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return !!(yield registerData.save()).id;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const Register = (0, mongoose_1.model)('Register', IRegister_1.registerSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Register.find({});
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
    update(_id, todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const Register = (0, mongoose_1.model)('Register', IRegister_1.registerSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Register.updateOne({ _id }, Object.assign({}, todo));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return Register;
        });
    }
    deleteById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Register = (0, mongoose_1.model)('Register', IRegister_1.registerSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Register.deleteOne({ _id });
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
exports.RegisterRepository = RegisterRepository;
//# sourceMappingURL=register-repository.js.map