import bcrypt from 'bcrypt';

const passwordPlana = '123456';
const saltRounds = 12;

// 1. Hashear contraseña antes de guardar en BD
const hashParaGuardar = await bcrypt.hash(passwordPlana, saltRounds);

console.log(hashParaGuardar);

// 2. Verificar contraseña en el login
const coincide = await bcrypt.compare("12345", hashParaGuardar);
// coincide -> true

console.log(coincide);