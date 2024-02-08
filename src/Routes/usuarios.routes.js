import { Router } from "express"; 
import { createUser, showUser } from "../controllers/usuario.controller.js"

const routes = Router();

routes.get("/usuarios", showUser)
routes.post("/usuarios", createUser)

export default routes;

