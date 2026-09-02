import express from "express";
import authRoutes from "./routes/auth.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import publicacionesRoutes from "./routes/publicaciones.routes.js";
import comentariosRoutes from "./routes/comentarios.routes.js";
import fileUpload from "express-fileupload";

const app = express();

//MIDDLEWARES GLOBALES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload()); // -> req.files 

//establecer public como carpeta pública
app.use(express.static("public"));


//RUTAS DE VISTAS

//RUTAS DE AUTENTICACIÓN (registro de usuarios / login)
app.use("/auth", authRoutes);

//RUTAS DE LA API
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/publicaciones", publicacionesRoutes);
app.use("/api/comentarios", comentariosRoutes);


export default app;