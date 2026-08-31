import Publicacion from "../../models/Publicacion.model.js";

const getPublicaciones = async (req, res) => {
    try {

        const { count, rows } = await Publicacion.findAndCountAll();

        res.json({
            status: "Ok",
            totalPublicacaciones: count,
            publicaciones: rows,
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export default getPublicaciones;
