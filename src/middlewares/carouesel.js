const {Router} = require('express')
const { deleteCarouselImage, addToCarousel, getCarousel } = require('../controllers/carousel')

const router = Router()

router.get('', async (req, res, next) => {
    try {
        res.json(await getCarousel())
                
    } catch (error) {
      next(error)  
    }
  })

router.post('', async (req, res, next)=>{
    try {
        return res.json( await addToCarousel(req.body))
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
  try {
      res.json(await deleteCarouselImage(req.params))
  } catch (error) {
    next(error)  
  }
})

  module.exports = router