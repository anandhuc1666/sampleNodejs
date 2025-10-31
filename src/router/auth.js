import express, { Router } from "express";
import { Login, register } from "../controller/auth.js";

const route = Router();

route.post("/register", register).post("/login", Login);

export default route;
