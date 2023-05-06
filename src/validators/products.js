const {check} = require('express-validator')
const {validateResult} = require('../helpers/validateHelper')
// {name, amount, price, images, type, description}

const validateCreate = [
    check('name')
    .exists()
    .isString()
    .not()
    .isEmpty(),
    check('amount')
    .exists()
    .isNumeric(),
    check('price')
    .exists()
    .isNumeric(),
    check('images')
    .exists()
    .isArray(),
    check('type')
    .exists()
    .isString(),
    check('description')
    .exists()
    .isString(),
    (req, res , next) =>{
        validateResult(req, res , next)
    }
]

module.exports = {validateCreate}