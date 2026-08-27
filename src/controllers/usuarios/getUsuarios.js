import Usuario from "../../models/Usuario.model.js";

const getUsuarios= async (req, res) => {
    try {

        const usuarios = await Usuario.findAll();

        res.status(201).json({
            status: "Ok",
            usuarios,
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export default getUsuarios;