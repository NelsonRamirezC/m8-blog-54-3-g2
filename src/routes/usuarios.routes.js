import express from "express";
import * as usuariosControllers from "../controllers/usuarios/index.js";
//import validaBody from "../middlewares/validaBody.js";


const router = express.Router();

//OBTENER TODOS LOS USUARIOS
router.get("/", usuariosControllers.getUsuarios);


export default router;
