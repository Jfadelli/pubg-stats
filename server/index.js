require("dotenv").config();
const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const api = express.Router()
const welcomeRouter = require('./routers/welcomeRouter')
const playerRouter = require('./routers/playerRouter')
const errorCatcher = require('./middleware/errorCatcher')

//port & ip
const host = process.env.HOST || "http://localhost"
const port = process.env.PORT || 4000

//routes
app.use('/api/', api)
app.use('/', welcomeRouter)
app.use('/api/players/', playerRouter)
// app.get("/api/players", async (req, res) => {
//     try {
//         const playerData = await db.query('select * from players')
//         res.status(200).json({
//             status: 'success',
//             results: playerData.rows.length,
//             data: {
//                 playerData: playerData.rows
//             }
//         })
//     }
//     catch (err) { console.log(err) }
// })

//misc
app.use(errorCatcher.errorCatcher);
app.listen(port, ()=>{
    console.log(`\n*** Server listening on ${host}:${port}`)
})



