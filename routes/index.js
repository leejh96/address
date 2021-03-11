const express = require('express');
const router = express.Router();
const address = require('../models/address');

router.get('/', (req, res, next) =>{
    address.find({}, (err, addresses)=>{
        if (err){
            console.error(err);
        }else{
            console.log(addresses);
            res.render('index', {addresses});
        }
    });
});

router.get('/index/:_id', (req,res,next)=>{
    address.findOne({_id : req.params._id}, (err, address)=>{
        if(err){
            console.error(err);
        }else{
            res.render('detail', {address});
        }
    });
});

router.post('/', (req, res, next)=> {
    address.create(req.body, (error, address)=>{
        if(error){
            console.error(error);
            return res.json({error});
        }
        return res.redirect('/');
    })
});

module.exports = router;