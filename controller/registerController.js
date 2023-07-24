const { User, isValidPassword } = require("../models/userModel");

async function handleRegister(req, res) {
  try {
    const { username, email, password } = req.body;
    console.log("Dados recebidos:", { username, email, password });

    
    if (!username || !email || !password) {
      res.status(400).json({ message: "Por favor, forneça um nome de usuário, email e senha válidos" });
      return;
    }

    
    if (password.length <= 6 || password.length > 20) {
      res.status(400).json({ message: "A senha deve ter entre 6 e 20 caracteres" });
      return;
    }

    
    if (!isValidPassword(password)) {
      res.status(400).json({ message: "Senha inválida" });
      return;
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      res.status(409).json({ message: "Usuário ou email já registrado" });
      return;
    }

    
    const newUser = new User({ username, email, password });
    await newUser.save();

    
    res.status(201).json({ message: "Registro de conta bem-sucedido" });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}

module.exports = { handleRegister };
