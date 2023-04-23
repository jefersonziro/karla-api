import tables from "./database.js";

export function listUsers(request, response) {
    return response.json(tables.userTable)
}

export function createUser(request, response) {
    const data = request.body
    tables.userTable.push(data)
    return response.json(data)
}


