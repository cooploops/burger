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
})

module.exports = router;