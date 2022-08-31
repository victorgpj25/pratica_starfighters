import { userRepository } from "../repositories/userRepository"

export async function startBattle (req, res) {
    const { firstUser, secondUser } = req.body
    

    const results = {
        
    }

    res.send(results)
}