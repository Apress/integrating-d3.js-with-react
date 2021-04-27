/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: server.js
*/

const express = require('express')
const next = require('next')

const port = process.env.PORT || 9000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
          if (err) throw err
            console.log(`Server Ready on http://localhost:${port}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })