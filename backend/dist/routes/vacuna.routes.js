"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vacuna_controller_1 = __importDefault(require("../controllers/vacuna.controller"));
const router = express_1.Router();
router.get('/', vacuna_controller_1.default.getAllVacunas);
router.get('/:id', vacuna_controller_1.default.getVacuna);
router.post('/new', vacuna_controller_1.default.newVacuna);
router.put('/update/:id', vacuna_controller_1.default.updateVacuna);
router.delete('/:id', vacuna_controller_1.default.deleteVacuna);
//Exportem router x utilitzar rutes a app.ts
exports.default = router;
