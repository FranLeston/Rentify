const express = require('express');
const router = express.Router();
const maintenance = require('../controllers/maintenance.controller');
const secure = require('../middlewares/secure.mid');
const constants = require('../constants');
const uploader = require('../configs/storage.config');

router.get('/rent', secure.isAuthenticated, maintenance.getTenantMaintenance);
router.get('/', secure.isAuthenticated, maintenance.list);
router.get('/own', secure.isAuthenticated, maintenance.listOwn);
router.post('/', secure.isAuthenticated, uploader.single('attachment'), maintenance.create);
router.get('/:id', secure.isAuthenticated, maintenance.get);
router.put('/:id', secure.isAuthenticated, uploader.single('attachment'), maintenance.update, secure.checkRole(constants.adminRole));
router.delete('/:id', secure.isAuthenticated, maintenance.delete);


module.exports = router;