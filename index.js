const express = require('express');
const app = express();
const productsRoutes = require("./src/routes/products")
const categoriesRoutes = require("./src/routes/categories")
const usersRoutes = require("./src/routes/users")
const authRoutes = require("./src/routes/auth")
require("./src/models")
const cors = require("cors")

app.use(express.json())
app.use(cors())

const PORT = 4468;

app.get("/", (req, res) => {
    res.send("Olá Samuel, seja bem vindo!")
})

app.use(productsRoutes)
app.use(categoriesRoutes)
app.use(usersRoutes)
app.use(authRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})