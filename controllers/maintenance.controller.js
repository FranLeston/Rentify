const createError = require('http-errors');
const Maintenance = require('../models/maintenance.model');


// module.exports.create = (req, res, next) => {
//   const maintenance = new Maintenance(req.body);
//   maintenance.save() //or Contract.create(req.body)
//     .then(maintenance => res.status(201).json(maintenance))
//     .catch(next);
// }

module.exports.create = (req, res, next) => {
  const maintenance = new Maintenance({
    ...req.body,
    user: req.user.id
  });
  console.log(req.body)

  if (req.file) {
    maintenance.imageURL = req.file.secure_url;
  }
    maintenance.save()
    .then(maintenance => res.status(201).json(maintenance))
    .catch(next);
}


module.exports.list = (req, res, next) => {
  Maintenance.find(req.query)
    .then(maintenances => res.json(maintenances))
    .catch(next);
}

module.exports.listOwn = (req, res, next) => {
  Maintenance.find({ user: req.user.id })
    .then(maintenances => res.json(maintenances))
    .catch(next);
}

module.exports.get = (req, res, next) => {
  Maintenance.findById(req.params.id)
    .then(maintenance => {
      if (!maintenance) {
        throw createError(404, 'maintenance not found');
      } else {
        res.json(maintenance);
      }
    })
    .catch(next);
}

module.exports.update = (req, res, next) => {
  Maintenance.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(maintenance => {
      if (!maintenance) {
        throw createError(404, 'maintenance not found');
      } else {
        res.json(maintenance);
      }
    })
    .catch(next);
}

module.exports.delete = (req, res, next) => {
  Maintenance.findByIdAndDelete(req.params.id)
    .then(maintenance => {
      if (!maintenance) {
        throw createError(404, 'Maintenance not found');
      } else {
        res.status(204).json();
      }
    })
    .catch(next);
}

module.exports.getTenantMaintenance = (req, res, next) => {
  Maintenance.find({tenantEmail: req.user.email})
    .then(maintenances => res.json(maintenances))
    .catch(next);
}
