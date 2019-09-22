const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const fun = require('../functions/fun');
const Str = require('../models/strings-model');

router.post('/add', (req, res, next) => {

    var strA =  req.body.strA;
    var strB =  req.body.strB;
    
    var m = strA.length;//length of string strA
    var n = strB.length;//length of string strB

    const returnResult = fun(strA, strB,m,n);//function to compare the string strA and strB
    
    if(returnResult){
        const str = new Str({
            _id: new mongoose.Types.ObjectId(),
            strA: strA,
            strB: strB
        });
        
        str
        .save()
        .then(docs => {
            res.status(200).json({
                result: true
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    }else if(!returnResult){
        res.status(200).json({
            result: false
        });
    }else{
        res.status(500);
    }
});

router.get('/list', (req, res, next) => {
    Str.find()
        .select('strA strB')
        .exec()
        .then(docs => {
            if(docs.length > 0){
                const response = {
                    list: docs
                };
                res.status(200).json(response);
            }else{
                res.status(404).json({
                    message: "data not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        })
});

module.exports = router;