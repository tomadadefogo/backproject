const { User } = require("../models/userModel");

async function handleLogin(req, res) {
  try {
    const { emailOrUsername, password } = req.body;

    
    if (!emailOrUsername || !password) {
      res.status(400).json({ message: "Por favor, forneça um e-mail ou nome de usuário e senha válidos" });
      return;
    }

    
    const user = await User.findOne({ $or: [{ username: emailOrUsername }, { email: emailOrUsername }] });

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    
    if (!user.comparePassword(password)) {
      res.status(401).json({ message: "Credenciais de login inválidas" });
      return;
    }

    
    res.status(200).json({ message: "Login bem-sucedido" });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}

module.exports = { handleLogin };
