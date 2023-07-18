const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://tomadadefogo:vBWeso0gEKbbcBf2@cluster0.oypaizr.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Conectado ao banco de dados MongoDB");
  } catch (error) {
    console.error(`Erro na conexão com o banco de dados: ${error}`);
  }
}

module.exports = { connect };
