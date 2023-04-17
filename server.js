const express = require("express")

const app = express()

app.use(express.json())

const users = [
    {
        "name": "Leonardo",
        "email": "leo@email.com",
        "createAt": new Date(),
        "updateAt": new Date()
    },
    {
        "name": "Jeff",
        "email": "jeff@email.com",
        "createAt": new Date(),
        "updateAt": new Date()
    },
    
]

app.get ("/users", (request, response) => {
    return response.json(users)
})

app.post("/users", (resquest, response) => {
    const data = resquest.body
    console.log(data)
    users.push(data)
    return response.json(data)
})

app.listen(3333, () => {
    console.log("SERVER ON")
})