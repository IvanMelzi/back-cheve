import express from 'express'
import * as bodyParser from "body-parser";

import beerRoutes from './routes/comment'
import factoryRoutes from './routes/factories'
const cors = require('cors')

const app: express.Application = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.use(beerRoutes)
app.use(factoryRoutes)

app.listen(3000, () => {
    console.log('App is listening on port 3000!')
})