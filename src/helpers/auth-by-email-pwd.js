const User = require("../models/userModel"); // Importa el modelo de usuario de MongoDB

const authByEmailPwd = async (email, password) => {
  try {
    const user = await User.findOne({ email }); // Busca el usuario por su correo electrónico en MongoDB
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    if (user.contrasenha !== password) {
      throw new Error("Contraseña incorrecta");
    }

    return user;
  } catch (error) {
    throw new Error("Error de autenticación");
  }
};


module.exports = authByEmailPwd;
