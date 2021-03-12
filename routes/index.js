const express = require('express');
const router = express.Router();
const address = require('../models/address');

router.get('/', (req, res, next) =>{
    res.render('index');
});

router.post('/', (req, res, next)=> {
    address.create(req.body, (error, address)=>{
        if(error){
            console.error(error);
            return res.json({error});
        }
        return res.redirect('/address');
    })
});

module.exports = router;