import express from "express";
import "dotenv/config";
import cors from "cors"
import { connectDB } from "./lib/db.js";
import { contactRouter } from "./routes/contactMessagesRoutes.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", contactRouter);

await connectDB();

if (process.env.NODE_ENV !== "production"){
    const PORT=process.env.PORT || 5000;
    app.listen(PORT, ()=> console.log(`Server Is Running On Port: ${PORT}`));
}
