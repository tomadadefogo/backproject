const User = require("../models/userModel");

async function handleDelete(req, res) {
  try {
    const { id } = req.params; // Obter o ID do usuário a partir da URL

    // Verificar se o usuário existe no banco de dados
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    // Deletar o usuário do banco de dados
    await User.deleteOne({ _id: id });

    res.status(200).json({ message: "Conta do usuário deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar conta do usuário:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}

module.exports = { handleDelete };
