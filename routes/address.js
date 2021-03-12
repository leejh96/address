const express = require('express');
const router = express.Router();
const address = require('../models/address');

router.get('/', (req, res, next)=>{
    address.find({}, (err, addresses)=>{
        if (err){
            console.error(err);
        }else{
            console.log(addresses);
            res.render('address', {addresses});
        }
    });
})

router.get('/:_id', (req,res,next)=>{
    address.findOne({_id : req.params._id}, (err, address)=>{
        if(err){
            console.error(err);
        }else{
            res.render('detail', {address});
        }
    });
});

router.get('/:_id/edit', (req, res, next)=>{
    address.findOne({_id : req.params._id}, (err, address)=>{
        if(err){
            console.error(err);
        }else{
            res.render('edit', {address});
        }
    });
});
router.post('/:_id', (req, res, next) => {
    address.findOne({_id : req.params._id}, (err, address)=>{
        if(err){
            console.error(err);
        }else{
            address = {
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone
            };
            res.render(`address/${req.params._id}`, address);
        }
    })
});
router.put('/:_id', (req, res, next)=>{
    address.findOneAndUpdate({_id : req.params._id}, req.body, (err, address)=>{
        if(err){
            console.error(err);
        }else{
            res.redirect(`/address/${req.params._id}`);
        }
    });
});

router.delete('/:_id', (req, res, next)=>{
    address.deleteOne({_id : req.params._id}, (err)=>{
        if(err){
            console.error(err);
        }else{
            res.redirect('/address');
        }
    });
});
module.exports = router;