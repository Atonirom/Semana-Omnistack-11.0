const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(routes);

/** 
 *  Rotas e Recusos
*/
/** 
 *  Metodos HTTP
 *
 *  GET: Buscar/Listar uma informação do Back-end
 *  POST: Criar uma informção no Back-end
 *  PUT:  Alterar uma informção no Back-end
 *  DELETE; Deletar uma informção no Back-end
*/
/**
 * Tipos de Paramentros
 * 
 * Query Params: Paramentros nomeados eviados na rota após "?" (Filtros, Paginação)
 * Route Params: Paramentros para indentificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recusos
 */

 /**
  * SQL: MySql, SQL Lite, Oracle, PostgreSQL, MicrosoftSQL, SQL Server
  * NoSQL: MongoDB, CouchDB, etc.
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table ('users').select('*').where() 
   */



app.listen(3333);