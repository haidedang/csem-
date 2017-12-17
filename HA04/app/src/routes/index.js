const express = require('express')
const router = express.Router()

global.router=router;

router.use('/', (req,res,next)=>{
    console.log('Accessed the page')
    next()
})


router.get('/', (req,res)=>{

    res.send('Hello :)')
})

module.exports = router