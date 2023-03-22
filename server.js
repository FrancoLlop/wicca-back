require('dotenv').config();
const server = require('./app.js');
const { conn } = require('./db.js');

conn.sync({ force: false }).then(() => {
    server.listen(3001 , () => {
      console.log('%s listening at 3001');
    });
});