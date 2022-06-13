const cheerio = require('cheerio')
const axios = require('axios')

const sources = [
    {
        name: "seasons",
        address: "https://www.basketball-reference.com/leagues/",
    }
]

const seasons = []

sources.forEach(source => {
    axios.get(source.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        
        $("table#stats>tbody>tr:gt(1)").each((index, element) => {
            if (index === 0) return true
            const th = $(element).find("th");
            const td = $(element).find("td");

            const year = $(th[0]).text()||"N/A";
            const champion = $(td[1]).text()||"N/A";
            const mvp = $(td[2]).text()||"N/A";
            const roy = $(td[3]).text()||"N/A";
            const pts_leader_name = $(td[4]).text()||"N/A";
            const trb_leader_name = $(td[5]).text()||"N/A";
            const ast_leader_name = $(td[6]).text()||"N/A";
            const ws_leader_name = $(td[7]).text()||"N/A";

            seasons.push({
                year: year,
                winners: {
                    champions: champion,
                    mvp: mvp,
                    rookie: roy,
                },
                top_stats: {
                    points: pts_leader_name,
                    rebounds: trb_leader_name,
                    assists: ast_leader_name,
                    winShares: ws_leader_name,
                }
            })
        })
    })
})

module.exports = seasons