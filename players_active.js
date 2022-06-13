const cheerio = require('cheerio')
const axios = require('axios')

const sources = [
    {
        name: "players_a",
        address: "https://www.basketball-reference.com/players/a",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_b",
        address: "https://www.basketball-reference.com/players/b",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_c",
        address: "https://www.basketball-reference.com/players/c",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_d",
        address: "https://www.basketball-reference.com/players/d",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_e",
        address: "https://www.basketball-reference.com/players/e",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_f",
        address: "https://www.basketball-reference.com/players/f",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_g",
        address: "https://www.basketball-reference.com/players/g",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_h",
        address: "https://www.basketball-reference.com/players/h",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_i",
        address: "https://www.basketball-reference.com/players/i",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_j",
        address: "https://www.basketball-reference.com/players/j",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_k",
        address: "https://www.basketball-reference.com/players/k",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_l",
        address: "https://www.basketball-reference.com/players/l",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_m",
        address: "https://www.basketball-reference.com/players/m",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_n",
        address: "https://www.basketball-reference.com/players/n",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_o",
        address: "https://www.basketball-reference.com/players/o",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_p",
        address: "https://www.basketball-reference.com/players/p",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_q",
        address: "https://www.basketball-reference.com/players/q",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_r",
        address: "https://www.basketball-reference.com/players/r",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_s",
        address: "https://www.basketball-reference.com/players/s",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_t",
        address: "https://www.basketball-reference.com/players/t",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_u",
        address: "https://www.basketball-reference.com/players/u",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_v",
        address: "https://www.basketball-reference.com/players/v",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_w",
        address: "https://www.basketball-reference.com/players/w",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_y",
        address: "https://www.basketball-reference.com/players/y",
        base: "https://www.basketball-reference.com"
    },
    {
        name: "players_z",
        address: "https://www.basketball-reference.com/players/z",
        base: "https://www.basketball-reference.com"
    },
]

const players_active = []

sources.forEach(source => {
    axios.get(source.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        $("table#players>tbody>tr").has("strong").each((index, element) => {
            const th = $(element).find("th");
            const td = $(element).find("td");
            
            const fullName = $(th[0]).text()
            const from = $(td[0]).text()
            const to = $(td[1]).text()
            const position = $(td[2]).text()
            const height = $(td[3]).text()
            const weight = $(td[4]).text()
            const dob = $(td[5]).text()
            const colleges = $(td[6]).text()

            players_active.push({
                fullName: fullName,
                dob: dob,
                colleges: colleges,
                active:{
                    from: from,
                    to: to,
                },
                attributes:{
                    position: position,
                    height: height,
                    weight: weight,
                }
            })
        })
    })
})

module.exports = players_active