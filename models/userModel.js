const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Validar o formato do email usando regex
    validate: {
      validator: function (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: "Email inválido",
    },
  },
  password: {
    type: String, // Agora o campo password é definido como Number
    required: true,
    validate: {
      validator: function (password) {
        return isValidPassword(password);
      },
      message: "Senha inválida",
    },
  },
},
{ timestamps: true }
);
function isValidPassword(password) {
  const passwordString = password.toString();
  return passwordString.length >= 6 && passwordString.length <= 20;
}

userSchema.methods.comparePassword = function (candidatePassword) {
  return candidatePassword === this.password.toString();
};

const User = mongoose.model("User", userSchema);

module.exports = { User, isValidPassword };
