const express = require('express')
const app = express()
const port = 3000

app.use(require('./routes/index.router'))

app.listen(port, () => console.log(`El servidor esta corriendo`))