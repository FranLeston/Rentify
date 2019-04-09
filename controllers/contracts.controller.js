const createError = require('http-errors');
const Contract = require('../models/contract.model');


// module.exports.create = (req, res, next) => {
//   const contract = new Contract(req.body);
//   contract.save() //or Contract.create(req.body)
//     .then(contract => res.status(201).json(contract))
//     .catch(next);
// }

module.exports.create = (req, res, next) => {
  const contract = new Contract({
    ...req.body,
    user: req.user.id
  });
  console.log(req.body)

  if (req.file) {
    contract.contractURL = req.file.secure_url;
  }
    contract.save()
    .then(contract => res.status(201).json(contract))
    .catch(next);
}


module.exports.list = (req, res, next) => {
  Contract.find()
    .then(contracts => res.json(contracts))
    .catch(next);
}

module.exports.listOwn = (req, res, next) => {
  Contract.find({ user: req.user.id })
    .then(contracts => res.json(contracts))
    .catch(next);
}

module.exports.get = (req, res, next) => {
  Contract.findById(req.params.id)
    .then(contract => {
      if (!contract) {
        throw createError(404, 'contract not found');
      } else {
        res.json(contract);
      }
    })
    .catch(next);
}

module.exports.update = (req, res, next) => {
  Contract.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(contract => {
      if (!contract) {
        throw createError(404, 'contract not found');
      } else {
        res.json(contract);
      }
    })
    .catch(next);
}

module.exports.delete = (req, res, next) => {
  Contract.findByIdAndDelete(req.params.id)
    .then(contract => {
      if (!contract) {
        throw createError(404, 'Contract not found');
      } else {
        res.status(204).json();
      }
    })
    .catch(next);
}

module.exports.getTenantContract = (req, res, next) => {
  Contract.find({tenantEmail: req.user.email})
    .then(contracts => res.json(contracts))
    .catch(next);
}
