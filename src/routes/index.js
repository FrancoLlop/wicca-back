const { Router } = require('express');
const router = Router();

const products = require('../middlewares/products')
const users = require('../middlewares/users')
const mercadopago = require('../middlewares/mercadopago')
const favorites = require('../middlewares/favorites')
const shoppingCart = require('../middlewares/shoppingCart')
const carousel = require('../middlewares/carouesel')


router.use('/products', products)
router.use('/users', users)
router.use('/mercadopago', mercadopago)
router.use('/favorites', favorites)
router.use('/shoppingCart', shoppingCart)
router.use('/carousel', carousel)

module.exports = router;