const cheerio = require('cheerio')
const axios = require('axios')

const sources = [
    {
        name: "standings",
        address: "https://www.basketball-reference.com",
    },
]

const standings_east = []
const standings_west = []
const standings = []

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
            standings_east.push({
                    team: team,
                    short: short,
                    seed: seed,
                    wins: wins,
                    losses: losses,
            })
        })
        $("table#confs_standings_W>tbody>tr").each((index, element) => {
            const th = $(element).find("th>a");
            const td = $(element).find("td");
            const seeds = $(element).find("span")
            
            const team = $(th[0]).attr('title')||"N/A"
            const short = $(th[0]).text()||"N/A"
            const seed = $(seeds).text().trim()||"N/A"

            const wins = $(td[2]).text()||"N/A"
            const losses = $(td[3]).text()||"N/A"

            standings_west.push({
                team: team,
                short: short,
                seed: seed,
                wins: wins,
                losses: losses,
            })
        })
        standings.push({
            east: standings_east,
            west: standings_west,
        })
    })
})

module.exports = standings