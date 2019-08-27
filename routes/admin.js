const path = require('path')

const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',productController.getAddProducts );


// /admin/add-product => POST
router.post('/add-product',productController.postAddProducts);

module.exports = router; 