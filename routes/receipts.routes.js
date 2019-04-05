const express = require('express');
const router = express.Router();
const receipt = require('../controllers/receipts.controller');
const secure = require('../middlewares/secure.mid');
const constants = require('../constants');
const uploader = require('../configs/storage.config');

router.get('/', secure.isAuthenticated, receipt.list);
router.post('/', secure.isAuthenticated, receipt.create);
router.get('/:id', secure.isAuthenticated, receipt.get);

module.exports = router;