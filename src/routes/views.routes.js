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

        console.log(publicaciones);

        res.render("home", {
            publicaciones, cantidadPublicaciones
        });
    } catch (error) {
        console.log(error);
        res.render("home");
    }
});

export default router;
