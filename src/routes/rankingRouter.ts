import express from "express"
import { displayRanking } from "../controllers/rankingController"

const rankingRouter = express.Router()

rankingRouter.get("/ranking", displayRanking )

export default rankingRouter