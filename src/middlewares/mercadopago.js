const {Router} = require('express')
const router = Router()
const mercadopago = require("mercadopago");
require('dotenv').config()
const {} = process.env

mercadopago.configure({
	access_token:"TEST-4037585378405354-042407-dda4aa6382cc3f7ba51c9fd2601c52af-1359232761",
});

router.post('/create_preference', async (req, res, next) => {
try {
    let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3000/success",
			"failure": "http://localhost:3000/failure",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
} catch (error) {
    next(error)
}
});

router.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

module.exports = router