const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./db/data")
const router = require("./router/registerRouter")
// tomadadefogo
// vBWeso0gEKbbcBf2
app.use(express.json())
app.use(cors())

db.connect()
app.use("/api", router)
app.get("/", (req, res) => {
  res.send("O Get foi com sucesso")
})

app.listen(3000, ()=> {
  console.log("Nodemon Funcionando")
})
