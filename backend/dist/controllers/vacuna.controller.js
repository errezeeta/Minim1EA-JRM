"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = __importDefault(require("../models/usuario"));
const vacuna_2 = __importDefault(require("../models/vacuna"));
function getAllVacunas(req, res) {
    vacuna_2.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
function getVacuna(req, res) {
    vacuna_2.default.findOne({ "id": req.params.id }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function newVacuna(req, res) {
    const vacuna_1 = new vacuna_2.default({
        "id": req.body.id,
        "nombre": req.body.nombre,
        "descripcion": req.body.descripcion,
        "tecnologia": req.body.tecnologia,
        "fechaAceptacion": req.body.fechaAceptacion
    });
    console.log(req.body);
    vacuna_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function updateVacuna(req, res) {
    const id = req.params.id;
    const nombre = req.params.nombre;
    const descripcion = req.body.descripcion;
    const tecnologia = req.body.tecnologia;
    const fechaAceptacion = req.body.fechaAceptacion;
    vacuna_2.default.update({ "id": id }, { $set: { "id": id, "nombre": nombre, "descripcion": descripcion, "tecnologia": tecnologia, "fechaAceptacion": fechaAceptacion } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
function deleteVacuna(req, res) {
    const { id } = req.params;
    usuario_1.default.findOne({ "id": req.params.id }).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
exports.default = { getAllVacunas, getVacuna, newVacuna, updateVacuna, deleteVacuna };
