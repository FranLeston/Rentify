const express = require('express');
const router = express.Router();
const contract = require('../controllers/contracts.controller');
const secure = require('../middlewares/secure.mid');
const constants = require('../constants');
const uploader = require('../configs/storage.config');

router.get('/rent', secure.isAuthenticated, contract.getTenantContract);
router.get('/', secure.isAuthenticated, contract.list);
router.get('/own', secure.isAuthenticated, contract.listOwn);
router.post('/', secure.isAuthenticated, uploader.single('attachment'), contract.create);
router.get('/:id', secure.isAuthenticated, contract.get);
router.put('/:id', secure.isAuthenticated, uploader.single('attachment'), contract.update, secure.checkRole(constants.adminRole));
router.delete('/:id', secure.isAuthenticated, contract.delete);


module.exports = router;