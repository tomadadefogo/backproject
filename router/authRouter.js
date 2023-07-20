const express = require("express");
const router = express.Router();
const registerController = require("../controller/registerController");
const loginController = require("../controller/loginController")
const updateController = require("../controller/updateController")
const deleteController = require("../controller/deleteController")
const allController = require("../controller/allController")

router.post("/registro", registerController.handleRegister);
router.post("/login", loginController.handleLogin)
router.put("/update/:id", updateController.handleUpdate)
router.delete("/del/:id", deleteController.handleDelete)
router.get("/usuarios", allController.allHandler)

module.exports = router;
