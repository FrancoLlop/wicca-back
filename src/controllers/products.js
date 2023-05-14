const { Products } = require('../../db')
const {deleteCloudy} = require('./cloudinary')

const getProducts= async () => {
    try {
        const products = await Products.findAll()
        if (products) {
            return products
        }else{
            return 'products not found'
        }

    } catch (error) {
        console.log(error)
    }
}
async function getProductById(id){
    try {
        const products = await Products.findAll({where: {id: id}})
        if (products) {
            return products
        }else{
            return 'products not found'
        }
    } catch (error) {
        console.log(error)
    }
}

async function createProducts({name, amount, price, images, type, description}){

try {
    const productcreated = await Products.findOrCreate({where: {name : name}, defaults:{
        name: name.trimStart().trimEnd(),
        amount:amount,
        price:price,
        description: description,
        type: type,
        element:element,
        images: images
    }})
    return 'El producto a sido creado'
} catch (error) {
    console.log(error)
}
}

async function deleteProduct(id){
    const product = await Products.findAll({where: {id: id}})
    await Products.destroy({
        where:{
            id: id
        }
    })
    // console.log(product[0].dataValues.images)
    for (let i = 0; i < product[0].dataValues.images.length; i++) {
         deleteCloudy(product[0].dataValues.images[i].public_id)
    }
    
    return 'Product deleted'
}

module.exports={
    getProducts,
    createProducts,
    deleteProduct,
    getProductById
}