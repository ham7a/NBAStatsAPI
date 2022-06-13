const cheerio = require('cheerio')
const axios = require('axios')

const sources = [
    {
        name: "teams_east",
        address: "https://www.basketball-reference.com",
    },
]

const teams_east = []

sources.forEach(source => {
    axios.get(source.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        $("table#confs_standings_E>tbody>tr").each((index, element) => {
            const th = $(element).find("th>a");
            const td = $(element).find("td");
            const seeds = $(element).find("span")
            
            const team = $(th[0]).attr('title')||"N/A"
            const short = $(th[0]).text()||"N/A"
            const seed = $(seeds).text().trim()||"N/A"

            const wins = $(td[2]).text()||"N/A"
            const losses = $(td[3]).text()||"N/A"

            teams_east.push({
                team: team,
                short: short,
                // seed: seed,
                // wins: wins,
                // losses: losses,
            })
        })
    })
})

module.exports = teams_east