const router = require("../routes/index.router")

const routes = {}

router.Message = (req, res) => {
  res.send("Bienvenido a mi primera api con node js y express Dios te bendiga!!")
}

module.exports = router