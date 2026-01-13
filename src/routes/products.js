const express = require("express")
const router = express.Router()
const productsController = require("../controllers/products")
const productsMiddlewares = require("../middlewares/products")
const { authToken } = require("../middlewares/authToken")
const axios = require("axios")

router.post(
    "/products",
    authToken(["seller", "admin"]),
    productsMiddlewares.validateInsertProduct,
    productsController.insertProduct
)

router.get(
    "/products",
    productsController.getAllProducts
)

router.post("/email", async (req, res) => {
    const api = axios.create({
        baseURL: "http://localhost:4505",
        headers: {
            "token": "Habibs"
        }
    })

    await api.get()

    return res.send({
        message: "Email enviado com sucesso!"
    })
})

module.exports = router