import knex from "knex";
import path from "path";

const connection = knex({
  client: "sqlite3",
  connection: {
    //path: padroniza caminhos para todos os Sistemas Operacionais
    // __dirname: retorna diretorio atual
    filename: path.resolve(__dirname, "database.sqlite"),
  },

  useNullAsDefault: true,
});

export default connection;
