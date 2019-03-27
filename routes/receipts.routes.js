const express = require('express');
const router = express.Router();
const receipt = require('../controllers/receipts.controller');
const secure = require('../middlewares/secure.mid');
const constants = require('../constants');
const uploader = require('../configs/storage.config');

router.get('/receipt', secure.isAuthenticated, receipt.list);
router.post('/receipt', secure.isAuthenticated, receipt.create);
router.get('/receipt:id', secure.isAuthenticated, receipt.get);

module.exports = router;