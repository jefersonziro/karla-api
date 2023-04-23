import express from 'express'

import { listUsers, createUser } from './controllers.js'

const app = express()

app.use(express.json()) // Permite o express receber Json no doby

app.get ("/users", listUsers)

app.post("/users", createUser)

app.listen(3333, () => {
    console.log("SERVER ON")
})