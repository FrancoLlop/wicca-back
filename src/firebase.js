require('dotenv').config()
var admin = require("firebase-admin");
const {firedata} = process.env

var serviceAccount = require(firedata)
const { getFirestore } = require('firebase-admin/firestore')


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore()

module.exports = {
    db
}