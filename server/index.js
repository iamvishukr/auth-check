import express from "express";
import connectDB from "./Db/connectDB.js";
import authRoutes from "./Routes/authRoute.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors({ origin: "http://localhost:3000", credentials: true })); //
app.use(express.json()); // allows us to parse incoming requests coming from :req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectDB();
  console.log("listening on port 8000");
});
