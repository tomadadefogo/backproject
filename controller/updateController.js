const User = require("../models/userModel");

async function handleUpdate(req, res) {
  try {
    const { id } = req.params; 
    const { username, email, password } = req.body;

    
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    
    if (username) {
      user.username = username;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }

    
    await user.save();

    res.status(200).json({ message: "Dados do usuário atualizados com sucesso" });
  } catch (error) {
    console.error("Erro na atualização:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}

module.exports = { handleUpdate };
