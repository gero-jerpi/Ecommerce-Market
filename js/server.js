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
  password: "*"
});

app.get("/users", (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(results)
    }
  })
})

app.post("/register", (req, res) => {
  const { email, user, password } = req.body
  connection.query(
    `
    INSERT INTO users (email, user, password)
    VALUES
    ("${email}", "${user}", "${password}")
    `,
    (err, results) => {
      if (!err) {
        res.status(200).send("Usuario creado")

      } else {
        res.status(500).send(err)
      }

    })
})

app.post("/login", (req, res) => {
  const { user, password } = req.body
  connection.query("SELECT * FROM users WHERE user = ?", [user], (err, result) => {

    if (err) {
      res.status(500).json(err)
    }
    
    const verifyUser = { ...result[0] }

    if (verifyUser.password === password) {
      res.status(200).json(verifyUser)
    } else {
      res.status(400).json({ message: "Contraseña incorrecta" })
    }
  }
  )
})


app.listen(3000, () => {
  console.log("Server listen on port 3000");
})


