import express from "express";
import * as controller from "../Controllers/userControllers.js"
const userRoutes=express.Router()
userRoutes.get("/listUser", (req,res) => {
    controller.listUserController(req).then((result) => {
        res.status(res.statusCode).send(result)
    }).catch((err) => {
        res.status(err.statusCode).send(err)
    })
})

userRoutes.post("/createUser", (req, res) => {
    controller.createUserController(req).then((result) => {
        res.status(res.statusCode).send(result)
    }).catch((err) => {
        res.status(err.statusCode).send(err)
    })
})

userRoutes.get("/:userId", (req, res) => {
    controller.getUserController(req).then((result) => {
        res.status(res.statusCode).send(result)
    }).catch((err) => {
        res.status(err.statusCode).send(err)
    })
})

userRoutes.delete("/delete/:userId", (req, res) => {
    controller.deleteUserController(req).then((result) => {
        res.status(res.statusCode).send(result)
    }).catch((err) => {
        res.status(err.statusCode).send(err)
    })
})

userRoutes.patch("/update/:userId", (req, res) => {
    controller.updateUserController(req).then((result) => {
        res.status(res.statusCode).send(result)
    }).catch((err) => {
        res.status(err.statusCode).send(err)
    })
})
export default userRoutes