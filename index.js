import express from "express";
import db from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
// import Users from "./models/UserModel.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();



try {
    await db.authenticate();
    console.log('Dbs terkoneksi ....');
    // await Users.sync();
} catch (error) {
    console.error(error);
}


app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true,
    optionSuccessStatus: 200,
    origin: 'http://localhost:3000'
}));
app.listen(5000, () => console.log("Server running at port 5000"))