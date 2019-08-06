const express = require('express')
const server = express()

const movie = require('./routers/movieRouter.js')
const category = require('./routers/categoryRouter.js')
const movcat = require('./routers/movcatRouter.js')

const port = 2019

server.use(express.json())

server.use(movie)
server.use(category)
server.use(movcat)

server.get('/',(req,res)=>{
    res.send('<h1>Ini Home Page</h1>')
})


server.listen(port, ()=>{
    console.log('Connected to port ' + port)
})