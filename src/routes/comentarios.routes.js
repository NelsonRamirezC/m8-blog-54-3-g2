import express from "express";
import * as comentariosControllers from "../controllers/comentarios/index.js";
import validaBody from "../middlewares/validaBody.js";

const router = express.Router();

//CREAR COMENTARIO
router.post("/", validaBody, comentariosControllers.crearComentario);


export default router;
