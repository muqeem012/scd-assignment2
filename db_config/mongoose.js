// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://root:root@cluster0.f73u0.mongodb.net/test?retryWrites=true&w=majority";
 
// const client = new MongoClient(uri);
 
// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
    
//     try {
//         console.log('Connecting to DB')
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
 

// module.exports = {main,client}


const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb+srv://root:root@cluster0.f73u0.mongodb.net/test?retryWrites=true&w=majority";

var _db;

module.exports = {

  // connectToServer: function( callback ) {
  //   MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
  //     console.log('connected!!')
  //     _db  = client.db('test');
  //     return callback( err );
  //   } );
  // },
  connectToServer: async function() {
    try{
      const client = await MongoClient.connect( url,  { useNewUrlParser: true });
      console.log('connected!!')
        _db  = client.db('test');
        return client;
    }catch(e){
      console.log(e)
    }
    
  },

  getDb: function() {
    return _db;
  }
};