import express from 'express'
import * as bodyParser from "body-parser";

import beerRoutes from './routes/beers'
import factoryRoutes from './routes/factories'

const app: express.Application = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(beerRoutes)
app.use(factoryRoutes)

app.listen(3000, () => {
    console.log('App is listening on port 3000!')
})