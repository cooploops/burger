const connection = require("./connection.js");

exports.selectAll = function(cb){
    connection.query("SELECT * FROM burgers", function(err, result){
        if (err) throw err;
        cb(result);
    })
}

exports.insertOne = function(burgerName, cb){
    connection.query("INSERT INTO burgers SET ?",{burger_name: burgerName, devoured: false}, function(err,result){
        if(err) throw err;
        cb(result);
    })
}

exports.updateOne = function(change, id, cb){
    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [change, parseInt(id)], function(err, result){
        if (err) throw err;
        cb(result);
    })
}