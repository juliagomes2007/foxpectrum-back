"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { unCoughtErrorHandler } from './handlers/errorHandler';
const index_1 = require("./routes/index");
// app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
class Server {
    constructor(app) {
        this.config(app);
        new index_1.default(app);
    }
    config(app) {
        app.use((0, express_1.urlencoded)({ extended: true }));
        app.use((0, express_1.json)());
    }
}
exports.default = Server;
process.on('beforeExit', function (err) {
    console.error(err);
});
//# sourceMappingURL=server.js.map