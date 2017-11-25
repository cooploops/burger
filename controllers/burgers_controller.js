const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req,res){
    burger.all(function(data){
        let hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function(req,res){

    let newBurger = req.body.burger;
    
    burger.create(newBurger, function(result){
        res.json(true);
    })
});

router.put("/api/burgers", function(req,res){
    let id = req.body.numId;
    let devoured = req.body.devoured;
    // res.json(id+ " " +devoured);

    burger.update(devoured, id, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.json(true);
            res.status(200).end();
        }
    })

})

module.exports = router;