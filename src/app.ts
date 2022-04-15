require('dotenv/config')

import express from 'express'

import './database'

import express from 'express'

const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
