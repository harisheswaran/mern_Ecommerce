const express = require('express');
const router = express.Router();
const { getProducts, getSingleProduct } = require('../controllers/ProductController');

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);

module.exports = router;