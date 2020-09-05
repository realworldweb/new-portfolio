const express = require('express'); //your original BE server
const app = express();
const serverless = require('serverless-http'); 

const router = express.Router();


const {MongoClient} = require('mongodb');


const url = "mongodb+srv://realworldred:Blackjack21@cluster0.vk8gi.mongodb.net/portfolio?retryWrites=true&w=majority";//authenticate
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});
  
async function main (){
 
 try{
 await client.connect();
 await listDatabases(client);
 }catch(e){
  console.error(e);
 }finally{
  await client.close()
  
 }
 }
 
 main().catch(console.error)

let projects = [];

async function listDatabases(client){
 
 const databasesList= await client.db().admin().listDatabases();
 
 console.log('databases:')
 
 for(let db of databasesList.databases){
  
    projects.push({'name': db.name});

 }
};



 router.get('/', async (req, res) => {
  
  const data = await projects;
  res.json(data);
});

 app.use('/api', router);
 
 app.listen(4000)
 
 module.exports = app;
 module.exports.handler = serverless(app);

