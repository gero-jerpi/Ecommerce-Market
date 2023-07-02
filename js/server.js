import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors({
  origin: "*"
}))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ecommercemarket',
  password: "gerocrack123"
});

app.get("/users", (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json(results)
    }

  })
})

app.post("/add-user", (req, res) => {
  const { user, password } = req.body
  console.log({ user, password });
  connection.query(
    `
    INSERT INTO users (user, password)
    VALUES
    ("${user}", "${password}")
    ` , (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Usuario cargado en la base de datos");
    }
  })
})

app.listen(3000, () => {
  console.log("Server listen on port 3000");
})


