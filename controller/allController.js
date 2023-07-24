const User = require("../models/userModel");

async function allHandler(req, res) {
  try {
    
    const users = await User.find();

    res.status(200).json(users); 
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}

module.exports = { allHandler };
