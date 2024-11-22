import express from 'express'

import cors from 'cors'
import 'dotenv/config'

const app = express()

const port = process.env.PORT || 5000

// middlewares

app.use(express.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send('Center Running')
})


app.listen(port, ()=> {
    console.log(`server is runnig on port ${port}`);
})