const express = require('express');
const router = express.Router();
const contract = require('../controllers/contracts.controller');
const secure = require('../middlewares/secure.mid');
const constants = require('../constants');


router.post('/contract', contract.create, secure.checkRole(constants.adminRole));



module.exports = router;