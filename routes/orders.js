const router = require('express').Router();
const Order = require('../controllers/orders');

router.get('/', Order.getOrders);
router.get('/:id', Order.getOrdersById);
router.post('/', Order.createOrders);
router.put('/:id', Order.UpdateOrders);
router.delete('/:id', Order.deleteOrders);

module.exports = router;