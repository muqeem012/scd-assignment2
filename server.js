const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/config.env' });
const mongoose = require('./db_config/mongoose')
// const { MongoClient } = require('mongodb');

const port = process.env.PORT
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/contact/create', require('./routes/contact'))
app.use('/api/v1/contact/', require('./routes/contact'))
app.use('/api/v1/contact/delete', require('./routes/contact'))
app.use('/api/v1/contact/update', require('./routes/contact'))

async function start(){
    try{
        // mongoose.connectToServer( function( err, client ) {
        //     if (err) console.log(err);
        //     // start the rest of your app here
        //     app.listen(port, () => {
        //         console.log('You are listening on port : ', port)
        //     })
        //   } );
        await mongoose.connectToServer().catch(console.error);
        app.listen(port, () => {
            console.log('You are listening on port : ', port)
        })
    }catch(e){
        console.log(e)
    }
}


start();
module.exports = app;
