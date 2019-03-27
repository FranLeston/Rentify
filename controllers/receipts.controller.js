const createError = require('http-errors');
const Receipt = require('../models/receipt.model');


module.exports.create = (req, res, next) => {
  const receipt = new Receipt(req.body);
  receipt.save() //or Receipt.create(req.body)
    .then(receipt => res.status(201).json(receipt))
    .catch(next);
}
// Story.
//   findOne({ title: 'Casino Royale' }).
//   populate('author').
//   exec(function (err, story) {
//     if (err) return handleError(err);
//     console.log('The author is %s', story.author.name);
//     // prints "The author is Ian Fleming"
//   });

module.exports.list = (req, res, next) => {
  Receipt.find()
    .then(receipts => res.json(receipts))
    .catch(next);
}

module.exports.get = (req, res, next) => {
  Receipt.findById(req.params.id)
    .then(receipt => {
      if (!receipt) {
        throw createError(404, 'receipt not found');
      } else {
        res.json(receipt);
      }
    })
    .catch(next);
}


