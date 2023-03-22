const { Router } = require('express');
const router = Router();

const products = require('../middlewares/products')
const users = require('../middlewares/users')


router.use('/products', products)
router.use('/users', users)

module.exports = router;