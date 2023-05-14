const { Carousel } = require('../../db')
const {deleteCloudy} = require('./cloudinary')

const getCarousel= async () => {
    try {
        const carousel = await Carousel.findAll()
        if (carousel) {
            return carousel
        }else{
            return 'carousel not found'
        }

    } catch (error) {
        console.log(error)
    }
}

async function addToCarousel({image}){

    try {
        const carouselCreated = await Carousel.findOrCreate({where: {image : image}, defaults:{
            image
        }})
        return 'Se añadio correctamente al carousel'
    
    } catch (error) {
        console.log(error)
    }
    }
    
async function deleteCarouselImage({id}){
        const carousel = await Carousel.findAll({where: {id: id}})
        await Carousel.destroy({
            where:{
                id: id
            }
        })
        // console.log(product[0].dataValues.images)
        // for (let i = 0; i < carousel[0].dataValues.images.length; i++) {
        //      deleteCloudy(carousel[0].dataValues.images[i].public_id)
        // }
    
        return 'Image deleted'
    }
    
    module.exports={
        deleteCarouselImage,
        addToCarousel,
        getCarousel
    }