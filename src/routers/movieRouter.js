const router = require('express').Router()
const conn = require('../connection/index.js')

//MOVIES

// ADD MOVIES
router.post('/addmovies', (req,res)=>{
    const sql = `INSERT INTO movies SET ?`
    const data = req.body

    conn.query(sql,data,(err,results)=>{
        if(err){
            return res.send(err)
        }
        res.send(results)
    })
})


//EDIT MOVIES BY ID
router.patch('/editmovies/:movie_id',(req,res)=>{
    const sql = `UPDATE movies SET ? WHERE movies.id = ${req.params.movie_id}`
    const data = req.body

    conn.query(sql,data,(err,results)=>{
        if(err){
            return res.send(err)
        }
        res.send(results)
    })

})

//DELETE MOVIES BY ID
router.delete('/deletemovies/:movie_id',(req,res)=>{
    const sql = `DELETE FROM movies WHERE id = ${req.params.movie_id}`
    
    conn.query(sql,(err,results)=>{
        if(err){
            return res.send(err)
        }
        res.send(results)
    })
})

//SHOW ALL MOVIES
router.get('/movies',(req,res)=>{
    const sql = `SELECT * FROM movies`

    conn.query(sql,(err,results)=>{
        if(err){
            return res.send(err)
        }
        res.send(results)
    })
})

module.exports = router
