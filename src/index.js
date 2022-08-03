import chalk from 'chalk'
import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import authentication from './routes/authentication.js'

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

app.use(authentication)

app.listen(PORT, console.log(chalk.yellow(`server run in port ${PORT}`)))