const compression = require('compression')
const express = require('express')
const Gun = require('gun')

const app = express()
const port = process.env.PORT || 8765

app.use(compression())
app.use(Gun.serve)
app.use(express.static(__dirname));

const server = app.listen(port, () => {
    console.log(`GunDB Relay Peer Listening on: http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send(`GunDB Relay Peer Running on port: ${port}`)
})

Gun({ web: server })