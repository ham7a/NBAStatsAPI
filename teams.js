const cheerio = require('cheerio')
const axios = require('axios')

const sources = [
    {
        name: "teams",
        address: "https://www.basketball-reference.com/teams/",
        base: "https://www.basketball-reference.com"
    }
]

const teams = []

sources.forEach(source => {
    axios.get(source.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        $("table#teams_active>tbody>tr.full_table").each((index, element) => {
            const th = $(element).find("th");
            const td = $(element).find("td");
            
            const team = $(th[0]).text()||"N/A"
            const league = $(td[0]).text()||"N/A"

            const total_games =  $(td[4]).text()||"N/A";
            const total_wins =  $(td[5]).text()||"N/A";
            const total_losses =  $(td[6]).text()||"N/A";
            const wl_percentage =  $(td[7]).text()||"N/A";

            const playoffs =  $(td[8]).text()||"N/A";
            const division =  $(td[9]).text()||"N/A";
            const conference =  $(td[10]).text()||"N/A";
            const nba_baa_aba =  $(td[11]).text()||"N/A";

            teams.push({
                team: team,
                league: league,
                games: {
                    total_games: total_games,
                    total_wins: total_wins,
                    total_losses: total_losses,
                    wl_percentage: wl_percentage,
                },
                championships: {
                    playoffs: playoffs,
                    division: division,
                    conference: conference,
                    nba_baa_aba: nba_baa_aba,
                },
            })
        })
    })
})

module.exports = teams