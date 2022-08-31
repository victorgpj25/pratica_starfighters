
import { userRepository } from "../repositories/userRepository"

export async function displayRanking (req, res) {
    const ranking = await userRepository.getRankingQuery()

    res.send({fighters: ranking})
}