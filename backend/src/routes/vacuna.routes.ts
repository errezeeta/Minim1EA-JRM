import { Router } from "express"; 
import vacunaController from "../controllers/vacuna.controller";

const router = Router();

router.get('/', vacunaController.getAllVacunas);
router.get('/:id', vacunaController.getVacuna);
router.post('/new',vacunaController.newVacuna);
router.put('/update/:id',vacunaController.updateVacuna);
router.delete('/:id', vacunaController.deleteVacuna);

//Exportem router x utilitzar rutes a app.ts
export default router;