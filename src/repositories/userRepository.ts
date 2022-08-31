import connection from "../databases/postgres"


async function checkFighterQuery (username) {
    return connection.query(
        `SELECT * FROM fighters WHERE username = $1`,
        [username]
    );
}

async function addFighterQuery (username) {
    return connection.query(
        `INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, 0, 0, 0)`,
        [username]
    );
}

async function addWinQuery (username) {
    return connection.query(
        `UPDATE fighters SET wins = wins + 1 WHERE username = $1`,
        [username]
    );
}

async function addLossQuery (username) {
    return connection.query(
        `UPDATE fighters SET losses = losses + 1 WHERE username = $1`,
        [username]
    );
}

async function addDrawQuery (username1, username2) {
    return connection.query(
        `UPDATE fighters SET draws = draws + 1 WHERE username = $1 OR username = $2`,
        [username1, username2]
    );
}


async function getRankingQuery () {
    const { rows: ranking } = await connection.query(
        `SELECT fighters.username, fighters.wins, fighters.losses, fighters.draws 
        FROM fighters 
        GROUP BY fighters.username, fighters.wins, fighters.losses, fighters.draws 
        ORDER BY fighters.wins DESC, fighters.draws DESC`
    );
    return ranking
}

export const userRepository = {
    checkFighterQuery,
    addFighterQuery,
    addWinQuery,
    addLossQuery,
    addDrawQuery,
    getRankingQuery
}