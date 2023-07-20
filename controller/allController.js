const User = require("../models/userModel");

async function allHandler(req, res) {
  try {
    // Encontrar todos os usuários no banco de dados
    const users = await User.find();

    res.status(200).json(users); // Responder com a lista de todos os usuários
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}

module.exports = { allHandler };
