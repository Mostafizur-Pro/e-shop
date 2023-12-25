const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require("dotenv").config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5xecsyp.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    
const productCollection = client.db("eShop").collection('products')

app.get('/products', async(req, res)=>{
    const result = await productCollection.find().toArray()
    res.send(result)
})
    




    console.log("Yes Successfully connected to MongoDB!");
  } finally {
   
  }
}
run().catch(console.dir);




app.get('/', (req, res)=>{
    res.send('eShop server is running')
})

app.listen(port, ()=>{
    console.log(`eShop server running on ${port}`)
})

