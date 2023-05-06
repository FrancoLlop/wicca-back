const{db} = require('../firebase')
const {Products} = require('../../db')

async function getFavoritesIdsByUserId(id){
    let userFinded = await db.collection('users').doc(id).get()
    userFavorites = ({
        favorites:userFinded.data().favorites
    }).favorites

    return userFavorites
}

async function getFavoritesByUserId(id){
    let favoritesProducts = []
    let userFinded = await db.collection('users').doc(id).get()
    userFavorites = ({
        favorites:userFinded.data().favorites
    }).favorites

    for (let i = 0; i < userFavorites.length; i++) {
        let productFinded = await Products.findByPk(userFavorites[i])
        favoritesProducts = [...favoritesProducts, productFinded]
    }
    if (favoritesProducts.length) return favoritesProducts
    else throw 'No products added to favorites'
}

async function addFavorites({id, favorites}){
    let userDat = await db.collection('users').doc(id).get()
    const info = userDat.data()

    if(!info.favorites.includes(favorites[0])){
      await db.collection('users').doc(id).update({
       ...info,
        favorites: [...info.favorites, ...favorites]
    })  
    }else{
        throw new Error('Favorite includes in user favorites', { statusCode: 404 })
    }
    return 'Favorites added'
}

async function deleteFavorites({id, favorite}){
    let userDat = await db.collection('users').doc(id).get()
    const info = userDat.data()
    const infoFiltered = info.favorites.filter(f => f !== favorite)

    await db.collection('users').doc(id).update({
       ...info,
        favorites: infoFiltered
    })
    return 'Favorite deleted!'
}

module.exports = {
    getFavoritesByUserId,
    addFavorites,
    getFavoritesIdsByUserId,
    deleteFavorites}