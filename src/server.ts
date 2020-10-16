import express from 'express'

import beersRoutes from './routes/beers'

const app: express.Application = express()

app.use(beersRoutes)

app.listen(3000, () => {
    console.log('App is listening on port 3000!')
})