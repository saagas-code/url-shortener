import dotenv from "dotenv";

dotenv.config();

const config: any = {
  port: process.env.PORT,
  db_port: process.env.POSTGRES_PORT,
  db_name: process.env.POSTGRES_DB,
  db_user: process.env.POSTGRES_USER,
  db_password: process.env.POSTGRES_PASSWORD,
};

export default config;
