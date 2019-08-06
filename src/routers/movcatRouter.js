const router = require('express').Router()
const conn = require('../connection/index.js')

//ADD CONNECTION MOVCAT
router.post('/addconnection',(req,res)=>{
    const sql = `INSERT INTO movcat SET ?`
    const data = req.body

    conn.query(sql,data,(err,results)=>{
        if(err){
            return res.send(err)
        }
        res.send(results)
    })
})

//DELETE CONNECTION MOVCAT
router.delete('/deleteconnection/:movcat_id',(req,res)=>{
    const sql = `DELETE FROM movcat WHERE id = ${req.params.movcat_id}`

    conn.query(sql,(err,results)=>{
        if(err){
            return res.send(err)
        }

        res.send(results)
    })
})

module.exports = router