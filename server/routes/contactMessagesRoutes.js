import express from "express";
import { contactMessagesSubmit } from "../controllers/contactMessagesController.js";
export const contactRouter = express.Router();              

contactRouter.post("/contact", contactMessagesSubmit);