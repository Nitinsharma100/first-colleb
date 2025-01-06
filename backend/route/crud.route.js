import express from "express";
import { create, del, getall, getone, update } from "../controller/crud.controller.js";

const routes=express.Router()

routes.post("/create",create)
routes.get("/getall",getall)
routes.get("/getone/:id",getone)
routes.put("/update/:id",update)
routes.delete("/delete/:id",del)

export default routes