"use strict";
//Establiment connexió amb bbdd MONGOdb
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect(config_1.default.DB.URI, dbOptions);
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Conectat correctament, BÉ!');
});
connection.on('Error en la conexió, VAJA!', err => {
    console.log(err);
    process.exit(0);
});
