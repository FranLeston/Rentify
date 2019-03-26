const createError = require('http-errors');
const Contract = require('../models/contract.model');


module.exports.create = (req, res, next) => {
  const contract = new Contract(req.body);
  contract.save() //or Contract.create(req.body)
    .then(contract => res.status(201).json(contract))
    .catch(next);
}