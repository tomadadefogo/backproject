const User = require("../models/userModel");

async function handleRegister(req, res) {
  try {
    const { username, email, password } = req.body;

    // Validar o tamanho da senha
    if (!password) {
      res.status(400).json({ message: "Por favor, forneça uma senha válida" });
      return;
    }

    // Validar o tamanho da senha
    if (password.length <= 6 || password.length > 20) {
      res.status(400).json({ message: "A senha deve ter entre 6 e 20 caracteres" });
      return;
    }

    // Verificar se o username, email e senha foram fornecidos
    if (!username || !email || !password) {
      res.status(400).json({ message: "Por favor, forneça um nome de usuário, email e senha válidos" });
      return;
    }

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
