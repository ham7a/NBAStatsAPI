/* 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBUC9p8ae2DsFyjo3nk9mpVujcIAQrgFTc",
    authDomain: "nbadata-ec631.firebaseapp.com",
    projectId: "nbadata-ec631",
    storageBucket: "nbadata-ec631.appspot.com",
    messagingSenderId: "844606454049",
    appId: "1:844606454049:web:99cb50575bc145ede46660",
    measurementId: "G-R07XJZXXY8"
};

const fb = initializeApp(firebaseConfig);
const analytics = getAnalytics(fb);

// -------------------------------------------------- /Firebase Configuration/ --------------------------------------------------
 */
const players = require("./players")
const players_active = require("./players_active")
const players_hof = require("./players_hof")
const teams = require("./teams")
const teams_west = require("./teams_west")
const teams_east = require("./teams_east")
const seasons = require("./seasons")
const standings = require("./standings")
const standings_west = require("./standings_west")
const standings_east = require("./standings_east")

const PORT = process.env.PORT || 8000

const express = require('express')
const root = require("./root")
const app = express()

app.get('/', (req, res) => {
    res.json(root)
})
app.get('/players', (req, res) => {
    res.json(players)
})
app.get('/players/active', (req, res) => {
    res.json(players_active)
})
app.get('/players/hof', (req, res) => {
    res.json(players_hof)
})
app.get('/teams', (req, res) => {
    res.json(teams)
})
app.get('/teams/east', (req, res) => {
    res.json(teams_east)
})
app.get('/teams/west', (req, res) => {
    res.json(teams_west)
})
app.get('/seasons', (req, res) => {
    res.json(seasons)
})
app.get('/standings', (req, res) => {
    res.json(standings)
})
app.get('/standings/east', (req, res) => {
    res.json(standings_east)
})
app.get('/standings/west', (req, res) => {
    res.json(standings_west)
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))