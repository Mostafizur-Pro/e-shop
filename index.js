const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express())

app.get('/', (req, res)=>{
    res.send('eShop server is running')
})

app.listen(port, ()=>{
    console.log(`eShop server running on ${port}`)
})