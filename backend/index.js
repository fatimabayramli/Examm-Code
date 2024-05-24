const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const router = require("./src/routes/router")
const app = express()

require("./src/config/db")

app.listen(5000, () => {
	console.log("Server has started!")
})

app.use(bodyParser.json())

app.use(cors()) ///bunu sehv yazmis ola bilerem

app.use("/api", router) /// deyesen route-du

//errorlar