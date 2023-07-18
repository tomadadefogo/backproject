const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./db/data")
// tomadadefogo
// vBWeso0gEKbbcBf2
app.use(express.json())
app.use(cors())

db.connect()
app.get("/", (req, res) => {
  res.send("O Get foi com sucesso")
})

app.listen(3000, ()=> {
  console.log("Nodemon Funcionando")
})
