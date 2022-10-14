const Container = require('../classes/container.class');

const db = 'products';

const product = new Container(db);

exports.save = async function(req, res) {
    res.status(201).json(await product.save(req.body));
};

exports.getAll = async function(_req, res) {
    res.status(200).json(await product.getAll());
};

exports.getById = async function(req, res) {
    res.status(201).json(await product.getbyId(req.param.id))
};

exports.getRandom = async function(_req, res){
    res.status(200).json(await product.getRandom());
};

exports.deleteAll = async function(_req, res){
    res.status(200).json(await product.deleteAll());
};

exports.deleteById = async function(req, res){
    res.status(201).json(await product.deleteById(req.param.id));
};
