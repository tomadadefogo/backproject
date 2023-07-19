const User = require("../models/userModel");

async function handleRegister(req, res) {
  try {
    const { username, email, password } = req.body;

    // Verificar se o username, email e senha foram fornecidos
    if (!username || !email || !password) {
      res.status(400).json({ message: "Por favor, forneça um nome de usuário, email e senha válidos" });
      return;
    }

    // Verificar se o usuário já existe no banco de dados
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      res.status(409).json({ message: "Usuário ou email já registrado" });
      return;
    }

    // Criar um novo usuário
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Registro bem-sucedido
    res.status(201).json({ message: "Registro de conta bem-sucedido" });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}

module.exports = { handleRegister };
