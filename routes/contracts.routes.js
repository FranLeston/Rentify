const express = require('express');
const router = express.Router();
const contract = require('../controllers/contracts.controller');
const secure = require('../middlewares/secure.mid');
const constants = require('../constants');
const uploader = require('../configs/storage.config');

router.get('/contract', secure.isAuthenticated, contract.list);
router.post('/contract', secure.isAuthenticated, uploader.single('attachment'), contract.create);
router.get('/contract:id', secure.isAuthenticated, contract.get);
router.put('/contract:id', secure.isAuthenticated, uploader.single('attachment'), contract.update, secure.checkRole(constants.adminRole));
router.delete('/contract:id', secure.isAuthenticated, contract.delete);

module.exports = router;