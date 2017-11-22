const orm = require("../config/orm.js");

exports.all = function(cb){
    orm.selectAll(function(res){
        cb(res);
    });
}

exports.create = function(burgerName, cb){
    orm.insertOne(burgerName, function(res){
        cb(res);
    });
}

exports.update = function(id, change, cb){
    orm.updateOne(id, change, function(res){
        cb(res);
    });
}