import express from "express";
import * as comentariosControllers from "../controllers/comentarios/index.js";
import validaBody from "../middlewares/validaBody.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

//CREAR COMENTARIO
router.post("/", validaBody, verifyToken, comentariosControllers.crearComentario);


export default router;
