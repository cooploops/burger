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

exports.update = function(change, id, cb){
    orm.updateOne(change, id, function(res){
        cb(res);
    });
}