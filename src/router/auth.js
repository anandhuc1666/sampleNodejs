import express, { Router } from "express";
import { Login, Register } from "../controller/auth.controller.js";

const route = Router();

route.post("/register", Register).post("/login", Login);

export default route;
