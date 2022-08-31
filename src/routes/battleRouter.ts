import express from "express"
import { startBattle } from "../controllers/battleController"
import { battleValidation } from "../middlewares/battleMiddleware"

const battleRouter = express.Router()

battleRouter.post("/battle", battleValidation, startBattle )

export default battleRouter