const express = require("express");
const router = express.Router();
const db = require('../db/index.js')

//Get all players
router.get("/", async (req, res) => {
    try {
        const playersData = await db.query('select * from  players')
        res.status(200).json({
            status: 'success',
            results: playersData.rows.length,
            data: {
                playersData: playersData.rows
            }
        })
    }
    catch (err) { console.log(err) }
})

//Get one player by name

router.get("/:name", async (req, res) => {
    try {
        const playerData = await db.query('SELECT * FROM players where name = $1', [req.params.name])
        console.log(res)
            res.status(200).json({
                status: 'success',
                results: playerData.rows.length,
                data:{
                    playerData: playerData.rows
                }
            })
            console.log('success')
        }
        

    
    catch (err) {console.log(err)}
})

module.exports = router