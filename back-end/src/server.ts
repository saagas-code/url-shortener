import express from "express";
import router from "./routes";
import config from "./config";
import dotenv from "dotenv";
import cors from "cors"
import { sequelize } from "./database/pgClient";

dotenv.config();
const app = express();
const port = config.port;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(router);

app.listen(port, async () => {
    try {
        await sequelize.sync();
        console.log(`Server listening on port ${port}`);
    } catch (err: any) {}
});
