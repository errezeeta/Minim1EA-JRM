"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
//Cremaos un schema y lo asignamos al tipo de la interfaz anterior
const usuarioSchema = new mongoose_1.Schema({
    //Definimos las propiedades que pusimos antes en la interfaz
    id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false },
    vacunas: { type: String, required: false }
}, 
//podemos pasar otro objeto de manera opcional con otras propiedades que pone la librería
{ timestamps: true });
// definimos un modelo que es lo que usaremos para hacer queries a la base de datos y lo que tendrá toddas las propiedades definidas antes. 
exports.default = mongoose_1.default.model('Usuario', usuarioSchema);
