import express from "express";
import Usuario from "../models/Usuario.model.js";
import Publicacion from "../models/Publicacion.model.js";
import Comentario from "../models/Comentario.model.js";
import moment from "moment";

const router = express.Router();

//VISTA HOME
router.get(["/"], async (req, res) => {
    try {
        const { count, rows } = await Publicacion.findAndCountAll({
            include: [
                {
                    model: Usuario,
                    as: "autor",
                    attributes: ["id", "nombre", "email"],
                },
            ],
        });

        const publicaciones = rows.map((p) => {
            p = p.toJSON();
            p.fechaCreacion = moment(p.fechaCreacion).format("DD/MM/YYYY hh:mm:ss a");
            p.fechaActualizacion = moment(p.fechaActualizacion).format("DD/MM/YYYY hh:mm:ss a");
            return p;
        });
        const cantidadPublicaciones = count;

        res.render("home", {
            publicaciones, cantidadPublicaciones
        });
    } catch (error) {
        console.log(error);
        res.render("home");
    }
});


router.get("/login", (req, res)=> {
    try {
        res.render("login");
    } catch (error) {
        console.log(error);
        res.render("login");
    }
});

router.get("/registro", (req, res)=> {
    try {
        res.render("registro");
    } catch (error) {
        console.log(error);
        res.render("registro");
    }
});

router.get("/nueva-publicacion", (req, res)=> {
    try {
        res.render("nuevaPublicacion");
    } catch (error) {
        console.log(error);
        res.render("nuevaPublicacion");
    }
});




export default router;
