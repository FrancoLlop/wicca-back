const{db} = require('../firebase')
const {Product} = require('../../db')

async function getShoppingCartIdsByUserId(id){
    // let userFinded = await db.collection('users').doc(id).get()
    // userShoppingCart = ({
    //     shoppingCart:userFinded.data().shoppingCart
    // }).shoppingCart

    // return userShoppingCart
    return "Aun no funciona"
}

async function getShoppingCartByUserId(id){
    // return "Aun no funciona"
    //  let shoppingCart = []
     let userFinded = await db.collection('users').doc(id).get()
     userShoppingCart = ({
         shoppingCart:userFinded.data().shoppingCart
     }).shoppingCart

    //  for (let i = 0; i < userShoppingCart.length; i++) {
    //      let shoppingCartFinded = await Room.findByPk(userShoppingCart[i])
    //     shoppingCart = [...shoppingCart, shoppingCartFinded]
    //  }
     if (userShoppingCart.length) return userShoppingCart
     else throw 'No shoppingCart added to shoppingCart'
}

async function addShoppingCart({id, shoppingCart}){
    let userDat = await db.collection('users').doc(id).get()
    const info = userDat.data()
console.log("Esto es info", info)
    if(!info.shoppingCart.includes(shoppingCart[0])){
      await db.collection('users').doc(id).update({
       ...info,
        shoppingCart: [...info.shoppingCart, ...shoppingCart]
    })  
    }else{
        throw new Error('shoppingCart includes in user shoppingCart', { statusCode: 404 })
    }
    return 'shoppingCart added'
}

async function updateShoppingCart({id, shoppingCart}){
    let userDat = await db.collection('users').doc(id).get()
    const info = userDat.data()
    let modifiedInfo = info
    
    for (let i = 0; i < modifiedInfo.shoppingCart.length; i++) {
        if(modifiedInfo.shoppingCart[i].id === shoppingCart[0].id){
            modifiedInfo.shoppingCart[i] = shoppingCart[0]
        }
    }
    
    modifiedInfo.shoppingCart.map(e => console.log("Esto es info",e.amount))
    await db.collection('users').doc(id).update(modifiedInfo)  
    return 'shoppingCart modified'
}

async function deleteShoppingCart({id, shoppingCart}){
    let userDat = await db.collection('users').doc(id).get()
    const info = userDat.data()
    const infoFiltered = info.shoppingCart.filter(f => f !== shoppingCart)

    await db.collection('users').doc(id).update({
       ...info,
        shoppingCart: infoFiltered
    })
    return 'shoppingCart deleted!'
}

module.exports = {
    getShoppingCartIdsByUserId,
    getShoppingCartByUserId,
    addShoppingCart,
    deleteShoppingCart,
    updateShoppingCart
}