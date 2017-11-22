const connection = require("./connection.js");

exports.selectAll = function(cb){
    connection.query("SELECT * FROM burgers", function(err, result){
        if (err) throw err;
        cb(result);
    })
}

exports.insertOne = function(burgerName, cb){
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ("+burgerName+",false)",function(err,result){
        if(err) throw err;
        cb(result);
    })
}

exports.updateOne = function(id, change, cb){
    connection.query("UPDATE burgers SET devoured = "+change+" WHERE id = "+id+";", function(err, result){
        if (err) throw err;
        cb(result);
    })
}