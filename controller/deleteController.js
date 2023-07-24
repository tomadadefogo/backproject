const User = require("../models/userModel");

async function handleDelete(req, res) {
  try {
    const { id } = req.params; 

    
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    
    await User.deleteOne({ _id: id });

    res.status(200).json({ message: "Conta do usuário deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar conta do usuário:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}

module.exports = { handleDelete };
