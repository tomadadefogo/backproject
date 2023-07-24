const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./db/data")
const router = require("./router/authRouter")

app.use(express.json())
app.use(cors())
db.connect()
app.use("", router)


app.listen(3002, ()=> {
  console.log("Nodemon Funcionando")
})
