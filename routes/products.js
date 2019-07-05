const router = require('express').Router();
const Products = require('../controllers/products');

router.get('/', Products.getProduct);
router.get('/:id', Products.getProductById);
router.post('/', Products.createProduct);
router.put('/:id', Products.updateProduct);
router.delete('/:id', Products.deleteProduct);

module.exports = router;