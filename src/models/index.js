import Usuario from "./Usuario.model.js";
import Publicacion from "./Publicacion.model.js";


//relación 1 a muchos entre Usuarios y Publicaciones
Usuario.hasMany(Publicacion, { foreignKey: "usuario_id", onDelete: "CASCADE" });

Publicacion.belongsTo(Usuario, { foreignKey: "usuario_id" });

export default {
    Usuario, Publicacion
}




