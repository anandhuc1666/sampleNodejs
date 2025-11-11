import express, { Router } from "express"
import { login, register } from "../controller/auth.controller.js"

const route = Router()

route.post("/register",register).post("/login",login)

export default route