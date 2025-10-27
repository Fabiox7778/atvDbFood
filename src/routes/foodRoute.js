import { Router } from "express";
import * as foodController from "../controllers/foodController.js";

const router = Router();

router.get("/", foodController.listarTodos);
router.get("/:id", foodController.listarUm);
router.post("/", foodController.criar);
router.delete("/:id", foodController.deletar);
router.put("/:id", foodController.atualizar);

export default router;