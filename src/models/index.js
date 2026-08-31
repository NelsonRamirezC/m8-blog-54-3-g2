import Usuario from "./Usuario.model.js";
import Publicacion from "./Publicacion.model.js";
import Comentario from "./Comentario.model.js"


//relación 1 a muchos entre Usuarios y Publicaciones
Usuario.hasMany(Publicacion, { foreignKey: "usuario_id", onDelete: "CASCADE" });

Publicacion.belongsTo(Usuario, { foreignKey: "usuario_id" });


// Relaciones con Usuario
Usuario.hasMany(Comentario, { foreignKey: "usuario_id", onDelete: "CASCADE" });
Comentario.belongsTo(Usuario, { foreignKey: "usuario_id" });

// Relaciones con Publicacion
Publicacion.hasMany(Comentario, { foreignKey: "publicacion_id", onDelete: "CASCADE" });
Comentario.belongsTo(Publicacion, { foreignKey: "publicacion_id" });

export default {
    Usuario, Publicacion, Comentario
}




