const express=require('express');
const router=express.Router();
const {getAllProducts, getAllProductsTesting}= require('../controllers/products.js');

router.route('/').get(getAllProducts);

module.exports = router;