import express from "express"
const app = express()
import { ascending_sort, descending_sort } from "../lib/array-sort.mjs"
import { equal, day, compare } from "../lib/conditional.mjs"
import { into_array } from "../lib/array.mjs"

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  return res.send(`Welcome to the beginning of nothingness`)
})

app.get("/task1", (req, res) => {
  let colors = ["Red", "Blue", "Yellow", "Green"]
  console.log("Before ", colors)

  let result = ascending_sort(colors)
  console.log("After ", result)

  return res.send(result)
})

app.get("/task2", (req, res) => {
  let colors = ["Red", "Blue", "Yellow", "Green"]
  console.log("Before ", colors)

  let result = descending_sort(colors)
  console.log("After ", result)

  return res.send(result)
})

/**
 * How to using query parameter:
 *
 * http://your_url:your_port/your_route?q=your_value
 * or type in Query Params when using postman
 * key      | value
 * q        | your_value
 */
app.get("/task3", (req, res) => {
  let q = req.query.q
  console.log("First value ", q)

  let result = equal(q)

  return res.send(result)
})

app.get("/task4", (req, res) => {
  let today = new Date().getDay()
  console.log("Today ", today)

  let result = day(today)

  return res.send(result)
})

app.post("/task5", (req, res) => {
  let number = req.body.number
  console.log("section1 ", typeof number)
  number = parseInt(number)
  console.log("section2 ", typeof number)

  let result = compare(number)

  return res.send(result)
})

app.get("/latihan1", (req, res) => {
  let a = req.query.a
  let b = req.query.b
  console.log("Typeof ", typeof a + " " + typeof b)

  let result = into_array(a, b)

  return res.send(result.split(","))
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3300`)
})
