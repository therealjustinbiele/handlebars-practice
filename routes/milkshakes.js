const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
  console.log("this is working great!")
})

module.exports = router
