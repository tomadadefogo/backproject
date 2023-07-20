const User = require("../models/userModel");

async function handleUpdate(req, res) {
  try {
    const { id } = req.params; // Obter o ID do usuário a partir da URL
    const { username, email, password } = req.body;

    // Verificar se o usuário existe no banco de dados
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    // Verificar quais campos o usuário deseja atualizar e atualizar o usuário
    if (username) {
      user.username = username;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }

    // Salvar as atualizações no banco de dados
    await user.save();

    res.status(200).json({ message: "Dados do usuário atualizados com sucesso" });
  } catch (error) {
    console.error("Erro na atualização:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}

module.exports = { handleUpdate };
