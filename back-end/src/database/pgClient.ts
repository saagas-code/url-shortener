import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432, 
  username: "admin",
  password: "admin",
  database: "url-shortener-db",
})

async function syncTables() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    await sequelize.sync();
    console.log("Tabelas sincronizadas com sucesso.");
  } catch (error) {
    console.error("Erro ao estabelecer a conexão com o banco de dados:", error);
    console.log("Tentando novamente em 5 segundos...");
    setTimeout(syncTables, 5000);
  }
}

export {sequelize, syncTables}
