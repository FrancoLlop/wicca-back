const {Router} = require('express')
const { getProducts, createProducts, deleteProduct, getProductById } = require('../controllers/products.js')
const { getCloudy, deleteCloudy} = require('../controllers/cloudinary')
const router = Router()

router.get('', async (req, res, next) => {
    try {
        res.json(await getProducts())
                
    } catch (error) {
      next(error)  
    }
  })

router.post('', async (req, res, next)=>{
    try {
        return res.json( await createProducts(req.body))
    } catch (error) {
        next(error)
    }
})
 
router.get('/cloud', async (req, res, next) => {
  try {
      res.json(await getCloudy())
              
  } catch (error) {
    next(error)  
  }
})


router.delete('/cloud', async (req, res, next) => {
  try {
      res.json(await deleteCloudy(req.query))
              
  } catch (error) {
    next(error)  
  }
})

router.get('/:id', async (req, res, next)=>{
  const {id} = req.params
  try {
      return res.json(await getProductById(id))
  } catch (error) {
      next(error)
  }
})

router.delete('/:id', async(req,res,next) =>{
  const {id} = req.params
  try {
      return res.send(await deleteProduct(id))
  } catch (error) {
      next(error)
  }
})

  module.exports = router