const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "....."
    database: "todo_database",
    host: "localhost",
    port: 3000
});

module.experts = pool;