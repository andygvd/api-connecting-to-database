const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json())

app.get("/todos", async (req, res) => {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
} catch (err) {
    console.error(err.message);
});
//routes// 

app.get("/todos/:id", async (req,res) => {
    const {id} = req.params
    try {
        const todo = await pool.query(SELECT * FROM todo WHERE todo_id = $1,[id]);
    } catch (err) {
        console.error(err.message);
});

app.put("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const{description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET
        description = $1 WHERE todo_id = $2", [description, id]
        );
        res.json("Todo was Updated")
    } catch (err) {
        console.error(err.message); 
});

app.post("/todos",async(req, res) =>) {
    try {
      const { description } =  req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (desciption) VALUES ($1) RETURNING *",
        [description]
      );
      
      res.json(newTodo.rows[0]);
    } catch (err)
      console.error(err.message);
};

app.delete("/todos/:id", async(req, res) => {
try {
    const {id} = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo
    WHERE todo_id = $1", [id]
    );
    res.json("TODO was successfully deleted!")
} catch (err) {
    console.error(err.message);
});
app.listen(3000, () => {
    console.log("server is listening on port 3000");
});