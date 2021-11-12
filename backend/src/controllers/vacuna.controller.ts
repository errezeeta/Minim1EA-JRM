import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import usuario from "../models/usuario";
import vacuna from "../models/vacuna";


function getAllVacunas (req:Request, res:Response): void {
    vacuna.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

function getVacuna (req:Request, res:Response): void {
    vacuna.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function newVacuna (req:Request, res:Response): void {
    const vacuna_1 = new vacuna({
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
    })
}


function updateVacuna (req:Request, res:Response): void {
    const id = req.params.id;
    const nombre = req.params.nombre;
    const descripcion: String = req.body.descripcion;
    const tecnologia: String = req.body.tecnologia;
    const fechaAceptacion: String = req.body.fechaAceptacion;


    vacuna.update({"id": id}, {$set: {"id": id,"nombre": nombre, "descripcion": descripcion, "tecnologia": tecnologia, "fechaAceptacion": fechaAceptacion}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}


function deleteVacuna(req:Request, res:Response): void {
    const { id } = req.params;
    usuario.findOne({"id":req.params.id}).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


export default { getAllVacunas, getVacuna, newVacuna, updateVacuna, deleteVacuna };