"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
var dbUrl = process.env.DB_URL || '';
var nodeEnv = process.env.NODE_ENV || '';
if (!dbUrl) {
    console.log('Please create .env file, refer .env.sample');
    process.exit(0);
}
var optionsObj = { benchmark: true, logging: console.log };
if (nodeEnv && nodeEnv === 'production') {
    optionsObj = { logging: false };
}
var options = optionsObj;
exports.sequelize = new sequelize_1.Sequelize(dbUrl, options);
exports.sequelize
    .authenticate()
    .then(function () {
    console.log('Connection has been established successfully..');
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
