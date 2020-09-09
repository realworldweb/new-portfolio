const express = require('express'); //your original BE server
const app = express();
const serverless = require('serverless-http'); 
const cors = require('cors')

const router = express.Router();


const {MongoClient} = require('mongodb');

const url = "process.env.mongoServer";//authenticate

let projectsList;
let certsList;

async function main (){
 
 const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true}); 
 
 try{
 await client.connect();
 await projectsMount(client);//mount projects so we can run various requests
 await certsMount(client);//mount certs so we can run various requests
 }catch(e){
  console.error(e);
 }
 
 
 
 async function projectsMount(client){// load products and pass it to express route for processing.
 console.log('ran')
   projectsList = await client.db('portfolio').collection('project');
   
   
 }
 
 async function certsMount(client){// load certs and pass it to express route for processing.
 console.log('ran')
   certsList = await client.db('portfolio').collection('courses');
   
   
 }
 
};



app.use(cors());

router.get('/projects', async (req, res) => {// return all from api projects
 await main().catch(console.error);// call main to start mongo
  const data = await projectsList.find({}).toArray();
  
  res.json(data);

 
  
});

router.get('/projects/:id', async (req, res) => {// query projects api 
  await main().catch(console.error);// call main to start mongo
  const data = await projectsList.find({"name" : req.params.name});
  
  res.json(data);
  
 
  
});

router.get('/certs', async (req, res) => {//return all certs from api 
 await main().catch(console.error);// call main to start mongo
 
  const data = await certsList.find({}).toArray();
  
  res.json(data);

 
  
});

router.get('/certs/:id', async (req, res) => {//return all certs from api 
 await main().catch(console.error);// call main to start mongo
  const data = await certsList.find({}).toArray();
  
  res.json(data);

 
  
});

 

 

 app.use('/api', router);
 
 app.listen(4000)
 
 module.exports = app;
 module.exports.handler = serverless(app);

