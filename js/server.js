import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors({
  origin: "*"
}))

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD
});

app.get("/products", (req, res) => {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(results)
    }
  })
})

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
        res.status(201).send("Usuario creado")
      } else {
        res.status(400).send(err)
      }

    })
})

app.post("/login", (req, res) => {
  const { user, password } = req.body
  connection.query("SELECT * FROM users WHERE user = ?", [user], (err, result) => {

    if (err) {
      res.status(500).json(err)
      return;
    }

    if (result.length === 0) {
      res.status(400).json({ msg: "Usuario incorrecto" })
      return;
    }

    const usuario = { ...result[0] }

    if (usuario.password === password) {
      res.status(200).json(usuario)
    } else {
      res.status(400).json({ msg: "Contraseña incorrecta" })
    }
  }
  )
})

app.post("/deleteproduct", (req, res) => {
  const { id } = req.body
  connection.query(
    `DELETE FROM products
      WHERE id = ?
      `, [id], (err, result) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json({ msg: "Producto eliminado" })
    }

  }
  )
})

app.post("/addproduct", (req, res) => {
  const { offer, category, img, price, amount, name, brand } = req.body

  connection.query(
    `INSERT INTO products (offer, category, img, price, amount, name, brand)
    VALUES
    (?, ?, ?, ?, ?, ?, ?)
    `, [offer, category, img, price, amount, name, brand], (err, results) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json({ msg: "Producto agregado" })
    }
  }
  )
})

app.get("/consultas", (req, res) => {
  connection.query("SELECT * FROM consultas", (err, results) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json(results)
    }
  })
})

app.post("/subirconsulta", (req, res) => {
  const { nombre, email, consulta } = req.body
  connection.query(
    `INSERT INTO consultas (nombre, email, consulta)
    VALUES
    (?, ?, ?)
  `, [nombre, email, consulta], (err, results) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json({ msg: "Consulta agregada" })
    }
  })
})

app.post("/eliminarconsulta", (req, res) => {
  const { id } = req.body
 
  connection.query(
    `DELETE FROM consultas
    WHERE id = ?
    `, [id], (err, results) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json({ msg: "Consulta eliminada" })
    }
  }
  )
})

app.listen(3000, () => {
  console.log("Server listen on port 3000");
})


