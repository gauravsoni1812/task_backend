import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";

const app = express();
dotenv.config({ path: ".env" });

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "PUT", "DELETE", "POST"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

dbConnection();

app.use(errorMiddleware);

app.get("/",(req, res)=>{
    res.send("server")
})   

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port: ${process.env.PORT}`);
}); 

export default app;
