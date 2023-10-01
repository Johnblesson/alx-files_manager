#!/usr/bin/node
const express = require("express");
const router = require("./routes/index");

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 5000;

app.use(express.json());
app.use('/api', router)

app.listen(PORT, () =>
  console.log(`The server is running on port: ${PORT}`)
)
