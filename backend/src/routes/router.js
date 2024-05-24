const express = require("express")
const router = express.Router()
const controllers = require("../controllers/FoodControllers")
// const router = require("../routes/router")

router.get("/foods", controllers.getAllFoods)
router.post("/foods", controllers.postFood)
router.get("/foods/:id", controllers.getFood)
router.delete("/foods/:id", controllers.deleteFood)
router.patch("/foods/:id", controllers.patchFood)

module.exports = router