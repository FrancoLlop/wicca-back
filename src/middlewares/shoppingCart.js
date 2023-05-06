const {Router} = require('express')
const {getShoppingCartIdsByUserId,getShoppingCartByUserId,addShoppingCart,deleteShoppingCart,updateShoppingCart} = require('../controllers/shoppingCart')
    
    const router = Router()
    
    // router.get('', async (req, res, next)=>{
    //     try {
    //           return res.json(await getFavorites()) 
    //     } catch (error) {
    //         next(error)
    //     }
    // })
    
    router.post('', async (req, res, next)=>{
        
        try {
            return res.json( await addShoppingCart(req.body))
        } catch (error) {
            next(error)
        }
    })
    router.get('/list/:id', async (req, res, next)=>{
        const {id} = req.params
        try {
            return res.json(await getShoppingCartIdsByUserId(id))
        } catch (error) {
            next(error)
        }
    })
    
    router.get('/:id', async (req, res, next)=>{
        const {id} = req.params
        try {
            return res.json(await getShoppingCartByUserId(id))
        } catch (error) {
            return res.status(404).send(error)
        }
    })
    
    router.put('/', async(req,res,next)=>{
        try {
            res.json( await updateShoppingCart(req.body))
        } catch (error) {
            next(error)
        } 
    })
    
    router.delete('', async(req,res,next) =>{
        try {
            return res.send(await deleteShoppingCart(req.body))
        } catch (error) {
            next(error)
        }
    })
    
    module.exports = router