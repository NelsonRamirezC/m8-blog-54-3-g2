import { Sequelize } from "sequelize";

//MOTOR_BASE_DATOS://NOMBRE_USUARIO:PASSWORD@DIRECCION_HOST:PUERTO/NOMBRE_BASE_DATOS

const URI_DATABASE = process.env.URI_DATABASE;

const sequelize = new Sequelize(URI_DATABASE);


export default sequelize;