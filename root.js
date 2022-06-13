const root = {
    welcome_message: "Hello and welcome to NBA_Data",
    description: "an API built to retrieve historical NBA data. wether it's teams, players, scores, standings..., it's all here",
    endpoints: {
        "/players": "lists every player to have played in the NBA",
            "/players/active": "lists active players in the NBA",
            "/players/hof": "lists every player to have been inducted into the NBA Hall of Fame",
        "/seasons": "summaries of every season of the NBA, with award winners and top performers",
        "/standings": "returns current standings for both conferences",
            "/standings/east": "current standings for the eastern conference",
            "/standings/west": "current standings for the western conference",
        "/teams": "records of all active teams in the NBA",
            "/teams/east": "records of all active teams in the NBA's eastern conference",
            "/teams/west": "records of all active teams in the NBA's western conference",
    },
}

module.exports = root