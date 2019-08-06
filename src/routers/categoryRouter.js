const router = require('express').Router()
const conn = require('../connection/index.js')

//MOVIES

// ADD MOVIES
router.post('/addcategory', (req,res)=>{
    const sql = `INSERT INTO categories SET ?`
    const data = req.body

    conn.query(sql,data,(err,results)=>{
        if(err){
            return res.send(err)
        }
        res.send(results)
    })
})


//EDIT MOVIES BY ID
router.patch('/editcategory/:category_id',(req,res)=>{
    const sql = `UPDATE categories SET ? WHERE id = ${req.params.category_id}`
    const data = req.body

    conn.query(sql,data,(err,results)=>{
        if(err){
            return res.send(err)
        }
        res.send(results)
    })

})

//DELETE MOVIES BY ID
router.delete('/deletecategory/:category_id',(req,res)=>{
    const sql = `DELETE FROM categories WHERE id = ${req.params.category_id}`
    
    conn.query(sql,(err,results)=>{
        if(err){
            return res.send(err)
        }
        res.send(results)
    })
})

//SHOW ALL MOVIES
router.get('/categories',(req,res)=>{
    const sql = `SELECT * FROM categories`

    conn.query(sql,(err,results)=>{
        if(err){
            return res.send(err)
        }
        res.send(results)
    })
})

module.exports = router
