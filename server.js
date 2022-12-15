// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const path = require("path");

const fs = require("fs");
const os = require("os");
const dbjson = require("./db.json");
const filePath = path.join(os.tmpdir(), "db.json");
fs.writeFileSync(filePath, JSON.stringify(dbjson));

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(os.tmpdir() + "/db.json"));
const middlewares = jsonServer.defaults();


server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
