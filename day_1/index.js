const express = require("express")
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  var x, y, z
  x = 5
  y = 3
  z = x + y

  return res.send(`The value of z is ${z}`)
})

app.post("/", (req, res) => {
  let email = req.body.email

  return res.send(`The email value is ${email}`)
})

app.post("/tambah", (req, res) => {
  let a, b, c
  a = parseInt(req.body.a)
  b = parseInt(req.body.b)
  c = a + b

  console.log(typeof a)

  return res.send(`Hasil dari ${a} + ${b} adalah ${c}`)
})

app.post("/kurang", (req, res) => {
  let a, b, c
  a = parseInt(req.body.a)
  b = parseInt(req.body.b)
  c = a - b

  return res.send(`Hasil dari ${a} - ${b} adalah ${c}`)
})

app.post("/kali", (req, res) => {
  let a, b, c
  a = parseInt(req.body.a)
  b = parseInt(req.body.b)
  c = a * b

  return res.send(`Hasil dari ${a} * ${b} adalah ${c}`)
})

app.post("/bagi", (req, res) => {
  let a, b, c
  a = parseInt(req.body.a)
  b = parseInt(req.body.b)
  c = a / b

  return res.send(`Hasil dari ${a} / ${b} adalah ${c}`)
})

app.post("/segitiga", (req, res) => {
  let a, x
  a = parseInt(req.body.a)
  x = a * 3

  return res.send(`Hasil dari keliling segitiga adalah ${x}`)
})

app.post("/lingkaran", (req, res) => {
  let a, x
  a = parseInt(req.body.a)
  x = (Math.PI * a).toFixed(4)

  return res.send(`Hasil dari keliling lingkaran adalah ${x}`)
})

app.listen(3300, () => {
  console.log(`Example app listening on port 3300`)
})
